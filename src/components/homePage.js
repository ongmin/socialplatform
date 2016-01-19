'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Home = React.createClass({
  render: function () {
    return (

      <div className='fb-container'>
        <div className='fb'>fac&#601;book</div>
        <div className='fb-text'>welcome</div>
      </div>
    )
  }
})

module.exports = Home
