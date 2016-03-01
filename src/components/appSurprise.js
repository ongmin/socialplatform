'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var AppQuoteGenerator = React.createClass({
  render: function () {
    return (
      <div className='pageWrapper'>
      <div className='appRandomCat'>
        <h2>Daily dose of kittens and cats</h2>
        <p>
      <a href='http://thecatapi.com'><img src='http://thecatapi.com/api/images/get?format=src&type=gif'></img></a>
      </p>
      </div>
      </div>
    )
  }
})

module.exports = AppQuoteGenerator
