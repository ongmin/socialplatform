'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Authenticate = require('./authenticate')

var Header = React.createClass({
  propTypes: {
    profile: React.PropTypes.object,
    idToken: React.PropTypes.string
  },
  render: function () {
    return (

      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='app' className='navbar-brand'>letsgetsocial</Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='surprise'><i className='fa fa-gift'></i></Link></li>
              <li><Link to='addUser'><i className='fa fa-user'></i></Link></li>
              <li><Link to='about'><i className='fa fa-info'></i></Link></li>
              <li><Authenticate className='btn btn-default' idToken={this.props.idToken} profile={this.props.profile} /></li>
            </ul>
            <form className='navbar-form navbar-right'>
              <input type='text' className='form-control' placeholder='Search...'></input>
            </form>
          </div>
        </div>
      </nav>

    )
  }
})

module.exports = Header

// <li><Link to='landingPage'>Landing Page</Link></li>
