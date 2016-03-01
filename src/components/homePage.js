'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link


var Home = React.createClass({
  showLock: function () {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.props.lock.show()
  },
  render: function () {
    return (
      <div className='login-container'>
        <div className='login-text'>Welcome</div>
          <a className='btn btn-block btn-social btn-lg btn-github' onClick={this.showLock}>
            <span className='fa fa-github'></span> Sign in with GitHub
          </a>
      </div>
    )
  }
})

module.exports = Home

//
// <div className='login-box'>
//   <a onClick={this.showLock}>Sign In</a>
// </div>
