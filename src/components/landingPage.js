'use strict'

var React = require('react')
var Router = require('react-router')
var Link = require('react-router').Link
var AuthorStore = require('../stores/authorStore')
var AuthorActions = require('../actions/authorActions')
var PostFeed = require('./users/postFeed')
var PostForm = require('./users/postForm')

var LandingPage = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    }
  },

  componentWillMount: function () {
    AuthorStore.addChangeListener(this._onChange)
  },

  // Clean up when this component is unmounted
  componentWillUnmount: function () {
    AuthorStore.removeChangeListener(this._onChange)
  },

  _onChange: function () {
    this.setState({ authors: AuthorStore.getAllAuthors() })
  },

  render: function () {
    return (
      <div>
        <h1>Landing Page</h1>
        <PostForm />
        <PostFeed />
      </div>
    )
  }
})

module.exports = LandingPage
