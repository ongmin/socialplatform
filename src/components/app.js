// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Header = require('./common/header')
var Sidebar = require('./common/sidebar')
// var Store = require('../stores/store')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  // getInitialState: function () {
  //   return {
  //     profile: Store.user,
  //     idToken: Store.parseToken()
  //   }
  // },
  // onChange: function () {
  //   this.setState({
  //     profile: Store.user,
  //     idToken: Store.getToken()
  //   })
  // },
  //
  // componentDidMount: function () {
  //   Store.addChangeListener(this.onChange)
  // },
  //
  // componentWillUnmount: function () {
  //   Store.removeChangeListener(this.onChange)
  // },

  getInitialState: function () {
    return {
      profile: null
    }
  },
  componentDidMount: function () {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log('Error loading the Profile', err)
        return
      }
      this.setState({profile: profile})
    }.bind(this))
  },

  render: function () {
    if (this.state.profile) {
      return (
      <div>
        <Header idToken={this.state.idToken} profile={this.state.profile} />
        <div className='special-container'>
          <Sidebar/>
          <div className='content-area'>
          <RouteHandler/>
          </div>
        </div>
      </div>
    )
    } else {
      return (
      <div className='loading'>Loading profile</div>
    )
    }
  }
})

module.exports = App

// <RouteHandler/>
