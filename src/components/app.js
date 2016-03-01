// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Store = require('../stores/authorStore')
var Header = require('./common/header')
var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  getInitialState: function () {
    return {
      profile: Store.user,
      idToken: Store.parseToken()
    }
  },
  onChange: function () {
    this.setState({
      profile: Store.user,
      idToken: Store.getToken()
    })
  },
  componentDidMount: function () {
    Store.addChangeListener(this.onChange)
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.onChange)
  },

  render: function () {
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
  }
})

module.exports = App
