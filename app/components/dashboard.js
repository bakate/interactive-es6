import React from 'react'
import pusher from '../pusher'
import { DISPLAY_HELP as displayHelp } from '../ENV'

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {},
      pingsForHelp: [],
      activity: [],
      roster: []
    }
    this.applyFilter = this.applyFilter.bind(this)
  }

  applyFilter ({ target: { name, options, selectedIndex } }) {
    const value = options[selectedIndex].value
    const filter = { ...this.state.filter, [name]: value }
    this.setState({ filter })
  }

  componentWillMount () {
    const helpChannel = pusher.subscribe('private-help-pings')
    const activityChannel = pusher.subscribe('private-activity-feed')

    const maintainRoster = (user) => {
      const roster = this.state.roster.concat([user])
      this.setState({
        roster: [...new Set(roster)].sort((a, b) => a.localeCompare(b))
      })
    }

    helpChannel.bind('client-new-help', (data) => {
      data.resolved = false
      this.setState({ pingsForHelp: this.state.pingsForHelp.concat([data]) })
    })

    helpChannel.bind('client-new-login', (data) => {
      maintainRoster(data.user)
    })

    activityChannel.bind('client-new-activity', (data) => {
      maintainRoster(data.user)
      this.setState({ activity: this.state.activity.concat([data]) })
    })
  }

  resolve(e, index) {
    e.preventDefault();
    const pings = this.state.pingsForHelp.map((ping, pingIndex) => {
      if (index === pingIndex) {
        ping.resolved = true;
      }

      return ping;
    });

    this.setState({ pingsForHelp: pings });
  }

  renderRows() {
    return this.state.pingsForHelp.map((ping, index) => {
      if (ping.resolved === true) {
        return null;
      }

      return (
        <tr key={ping.log.length}>
          <td>{ping.user}</td>
          <td>{ping.challenge}</td>
          <td>{ping.log.length}</td>
          <td><pre><code>{JSON.stringify(ping.log[ping.log.length-1], null, 2)}</code></pre></td>
          <td><button className="btn btn-default" onClick={(e) => this.resolve(e, index)}>On l’a aidé-e</button></td>
        </tr>
      );
    });
  }

  renderActivity() {
    const filter = this.state.filter
    const trialMap = {}
    this.userMap = {}
    return this.state.activity.map((activity, index) => {
      const trialMapKey = `${activity.user}-${activity.challenge}`
      const tryIndex = trialMap[trialMapKey] = (trialMap[trialMapKey] || 0) + 1
      const wasSuccess = activityWasSuccessful(activity);
      if (filter.challenge === activity.challenge) {
        this.userMap[activity.user] = (wasSuccess ? true : tryIndex)
      }
      const successLabel = `${wasSuccess ? 'Trop fort !' : 'Dommage !'} (${tryIndex})`
      if (
        filter.result && !successLabel.startsWith(filter.result) ||
        filter.user && filter.user !== activity.user ||
        filter.challenge && filter.challenge !== activity.challenge
      ) {
        return
      }
      return (
        <tr key={JSON.stringify(activity)+index}>
          <td>{activity.user}</td>
          <td>{activity.challenge}</td>
          <td>{successLabel}</td>
        </tr>
      );
    });
  }

  renderFilter (kind) {
    const values = computeValues(this.state.activity, kind)
    return (
      <select name={kind} onChange={this.applyFilter}>
        <option key='' value=''>—non filtré—</option>
        {values.map(([v, t]) => <option key={v} value={v}>{t || v}</option>)}
      </select>
    )
  }

  renderRoster () {
    const users = Object.keys(this.userMap)
    if (users.length === 0) {
      return (
        <p>{this.state.roster.join(', ')}</p>
      )
    }

    const successfulUsers = users.filter((u) => this.userMap[u] === true)
    const failingUsers = this.state.roster
      .filter((u) => !successfulUsers.includes(u))
      .map((u) => [u, this.userMap[u] || 0])
      .sort(([u1, s1], [u2, s2]) => s2 - s1)
      .map(([user, score]) => `${user} (${score})`)
    return (
      <p>
        {successfulUsers.length > 0 &&
          <span>
            <span className='successful'>{successfulUsers.join(', ')}</span>
            {' • '}
          </span>
        }
        <span className='failing'>{failingUsers.join(', ')}</span>
      </p>
    )
  }

  render () {
    const activity = this.renderActivity()
    return (
      <div>
        {this.state.roster.length > 0 &&
          <div className='roster'>
            <h4>Roster</h4>
            { this.renderRoster() }
          </div>
        }
        {displayHelp &&
          <div>
            <h4>Demandes d’aide</h4>
            <table className='table table-striped'>
              <thead>
                <tr><th>Nom</th><th>Exercice</th><th>Tentatives</th><th>Dernière</th><th>Aidé-e ?</th></tr>
              </thead>
              <tbody>
                { this.renderRows() }
              </tbody>
            </table>
          </div>
        }

        <h4>Activité</h4>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Nom {this.renderFilter('user')}</th>
              <th>Exercice {this.renderFilter('challenge')}</th>
              <th>Résultat {this.renderFilter('result')}</th>
            </tr>
          </thead>
          <tbody>
            { activity }
          </tbody>
        </table>
      </div>
    )
  }
}

function activityWasSuccessful ({ res }) {
  return res.error != true && res.every((a) => a.passed === true)
}

function computeValues (activity, kind) {
  if (kind === 'result') {
    return [['Trop fort !'], ['Dommage !']]
  }

  if (kind !== 'challenge') {
    return activity.map((act) => [act[kind]])
  }

  const results = {}
  for (const act of activity) {
    const value = act[kind]
    const bucket = (results[value] = results[value] || { successes: new Set(), totals: new Set() })
    bucket.totals.add(act.user)
    if (activityWasSuccessful(act)) {
      bucket.successes.add(act.user)
    }
  }
  return Object.keys(results).sort().map(
    (v) => [v, `${v} (${results[v].successes.size}/${results[v].totals.size})`]
  )
}
