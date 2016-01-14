'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>React playground</h1>
        <p>Simple site built with React</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
      </div>
    )
  }
})

module.exports = Home
