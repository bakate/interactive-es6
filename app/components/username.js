import React from 'react'
import store from 'store'
import { subscribeToHelp } from '../challenge-channels'

export default class Username extends React.Component {
  constructor (props) {
    super(props)
    this.state = { username: store.get('username'), submitted: !!store.get('username') }
  }

  componentDidMount () {
    this.helpChannel = subscribeToHelp()
  }

  updateName (e) {
    this.setState({ username: e.target.value })
  }

  submitName (e) {
    e.preventDefault()
    store.set('username', this.state.username)
    this.setState({ submitted: true })
    this.helpChannel.trigger('client-new-login', {
      user: store.get('username')
    })

    this.props.nameSetCallback()
  }

  renderForm () {
    return (
      <form className='navbar-form navbar-left' onSubmit={(e) => this.submitName(e)}>
        <div className='form-group'>
          <input placeholder='Ton p’tit nom' className='form-control' type='text' value={this.state.username} onChange={(e) => this.updateName(e)} />
        </div>
        <button type='submit' className='btn btn-default'>C’est parti !</button>
      </form>
    )
  }

  renderName () {
    return (
      <p className='navbar-text'>Tu es <strong>{ this.state.username }</strong></p>
    )
  }

  render () {
    return this.state.submitted ? this.renderName() : this.renderForm()
  }
}
