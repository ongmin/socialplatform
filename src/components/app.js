// Disabling check because we can't run strict mode. Need global vars.

var React = require('react')
var Header = require('./common/header')
var Sidebar = require('./common/sidebar')
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>

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
