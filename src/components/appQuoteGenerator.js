'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var AppQuoteGenerator = React.createClass({
  render: function () {
    return (

      <div className='appQuoteGenerator'>
      <h1>Quote generator</h1>
        <div className='box'>
          <div className='quote'>
            <i className='fa fa-quote-left'></i>
            <span id='quote'></span>
            <i className='fa fa-quote-right'></i>
          </div>
          <div className='author'>
            <span id='author'></span>
          </div>
        </div>

        <div className='button raised' id='buttonQuoteGenerator'>
          Generate Quote
        </div>
        </div>
    )
  }
})

module.exports = AppQuoteGenerator
