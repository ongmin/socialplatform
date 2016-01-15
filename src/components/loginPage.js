'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (

    <div className='login-form-wrap'>
    <h1>Facebook</h1>
    <form className='login-form' action='POST' action='#'>
        <input className='login email' type='email' name='email' required placeholder='Email'></input>
        <input className='login password' type='password' name='password' required placeholder='Password'></input>
      <input className='login login-submit' type='submit' value='Login'></input>
    </form>
    <h5><a href='#'>Forgot password</a></h5>
  </div>
    )
  }
})

module.exports = Home
