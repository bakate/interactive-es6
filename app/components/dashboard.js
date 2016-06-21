import React from 'react';
import pusher from '../pusher';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
      pingsForHelp: [],
      activity: []
    };
    this.applyFilter = this.applyFilter.bind(this)
  }

  applyFilter ({ target: { name, options, selectedIndex } }) {
    const value = options[selectedIndex].value
    console.log(name, options, selectedIndex, value)
    const filter = { ...this.state.filter, [name]: value }
    console.log(filter)
    this.setState({ filter })
  }

  componentWillMount() {
    const helpChannel = pusher.subscribe('private-help-pings');
    const activityChannel = pusher.subscribe('private-activity-feed');

    helpChannel.bind('client-new-help', (data) => {
      data.resolved = false;
      this.setState({ pingsForHelp: this.state.pingsForHelp.concat([data]) });
    });

    activityChannel.bind('client-new-activity', (data) => {
      console.log('got new activity', data);
      this.setState({ activity: this.state.activity.concat([data]) });
    });
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
    return this.state.activity.map((activity, index) => {
      const wasSuccess = activity.res.error != true && activity.res.every((a) => a.passed === true);
      const successLabel = wasSuccess ? 'Trop fort !' : 'Dommage !'
      if (
        filter.result && filter.result !== successLabel ||
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
    const values = kind === 'result'
      ? ['Trop fort !', 'Dommage !']
      : this.state.activity.map((activity) => activity[kind])
    const uniques = [...new Set(values)]
    return (
      <select name={kind} onChange={this.applyFilter}>
        <option key='' value=''>—non filtré—</option>
        {uniques.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>
    )
  }

  render() {
    return (
      <div>
        <h4>Demandes d’aide</h4>
        <table className="table table-striped">
          <thead>
            <tr><th>Nom</th><th>Exercice</th><th>Tentatives</th><th>Dernière</th><th>Aidé-e ?</th></tr>
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>

        <h4>Activité</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nom {this.renderFilter('user')}</th>
              <th>Exercice {this.renderFilter('challenge')}</th>
              <th>Résultat {this.renderFilter('result')}</th>
            </tr>
          </thead>
          <tbody>
            { this.renderActivity() }
          </tbody>
        </table>
      </div>
    );
  }
}
