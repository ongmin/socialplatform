'use strict'

var React = require('react')
var Actions = require('../../actions/authorActions')

var Authenticate = React.createClass({
  propTypes: {
    profile: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  login: function () {
    Actions.login(this.props.idToken)
  },

  logout: function () {
    Actions.logout()
    this.context.router.transitionTo('/')
  },

  render: function () {
    if (this.props.profile) {
      return (
          <button className='btn btn-block btn-social btn-sm btn-github' onClick={this.logout}><span className='fa fa-github'></span> Sign Out </button>
    )
    } else {
      return (
          <button className='btn btn-block btn-social btn-sm btn-github' onClick={this.login}><span className='fa fa-github'></span> Sign In </button>
      )
    }
  }
})

module.exports = Authenticate
