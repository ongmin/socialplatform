'use strict'

var React = require('react')
var Router = require('react-router')
var Link = require('react-router').Link
var PostStore = require('../stores/postStore')
var PostActions = require('../actions/postActions')
var PostFeed = require('./users/postFeed')
var PostForm = require('./users/postForm')

var LandingPage = React.createClass({
  getInitialState: function () {
    return {
      posts: PostStore.getAllPosts()
    }
  },

  componentWillMount: function () {
    PostStore.addChangeListener(this._onChange)
  },

  // Clean up when this component is unmounted
  componentWillUnmount: function () {
    PostStore.removeChangeListener(this._onChange)
  },

  _onChange: function () {
    this.setState({ posts: PostStore.getAllPosts() })
  },

  render: function () {
    return (
      <div>
        <PostFeed />
      </div>
    )
  }
})

module.exports = LandingPage
