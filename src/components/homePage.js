'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>Welcome to The Community</h1>
        <p>Letsgetsocial is a generic framework for creating your own interest-based community and surrounding yourself with people you dig.</p>
        <p>Built with React, React Router, and Flux.</p>
        <Link to='about' className='btn btn-primary btn-lg'>Get Started</Link>
      </div>
    )
  }
})

module.exports = Home
