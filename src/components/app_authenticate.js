// Disabling check because we can't run strict mode. Need global vars.

var App = require('./app')
var React = require('react')
var Home = require('./homePage')

var AppAuthenticate = React.createClass({
  componentWillMount: function () {
    this.lock = new Auth0Lock('bkUJ0ZSdxnXxoO2QETnLLh6cIqYqM8hv', 'makantime.auth0.com')
    this.setState({idToken: this.getIdToken()})
  },
  getIdToken: function () {
    var idToken = localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.log('Error signing in', authHash)
        return null
      }
    }
    return idToken
  },

  render: function () {
    if (this.state.idToken) {
      return (
      <App lock={this.lock} idToken={this.state.idToken}/>
    ) } else {
      return (<Home lock={this.lock}/>)
    }
  }
})

module.exports = AppAuthenticate
