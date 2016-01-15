'use strict'

// This file is mocking a web API by hitting hard coded data.
var posts = require('./postData').posts
var _ = require('lodash')

// This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (post) {
  return post.userName.toLowerCase() + '-' + post.timestamp.toLowerCase()
}

var _generateTimestamp = function (post) {
  return (new Date()).toISOString()
}

// Return cloned copy so that the item is passed by value instead of by reference
var _clone = function (item) {
  return JSON.parse(JSON.stringify(item))
}

var PostApi = {
  getAllPosts: function () {
    return _clone(posts)
  },

  getPostById: function (id) {
    var post = _.find(posts, {id: id})
    return _clone(post)
  },

  savePost: function (post) {
    console.log('Pretend this just saved the post to the DB... Oh! So Cool!!')

    if (post.id) {
      var existingPostIndex = _.indexOf(posts, _.find(posts, {id: post.id}))
      posts.splice(existingPostIndex, 1, post)
    } else {
      // The server would generate ids for new authors in a real app.
      post.id = _generateId(post)
      post.timestamp = _generateTimestamp(post)
      posts.push(post)
    }

    return _clone(post)
  },

  deletePost: function (id) {
    console.log('Pretending that this just deleted the post from the DB...')
    _.remove(posts, { id: id })
  }
}

module.exports = PostApi
