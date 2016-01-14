'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var AuthorActions = require('../../actions/authorActions')
var toastr = require('toastr')

var PostFeed = React.createClass({
  // # propTypes: {
  // #   authors: React.PropTypes.array.isRequired
  // # },

  render: function () {
    return (
      <div className='pageWrapper'>
        <h2 className='page-header'>Landing Page</h2>
          <div className='panel panel-info'>
            <div className='panel-heading'>
              <h3 className='panel-title'>firstName lastName</h3>
            </div>
              <div className='panel-body'>Today I ate two peanut butter jelly sandwiches.</div>
          </div>
      </div>

    )
  }
})

module.exports = PostFeed
