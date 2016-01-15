'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var PostApi = require('../api/postApi')
var ActionTypes = require('../constants/actionTypes')

var PostActions = {
  createPost: function (post) {
    var newPost = PostApi.savePost(post)

// Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_POST,
      post: newPost
    })
  },

  updatePost: function (post) {
    var updatedPost = PostApi.savePost(post)

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_POST,
      post: updatedPost
    })
  },

  deletePost: function (id) {
    PostApi.deletePost(id)

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_POST,
      id: id
    })
  }
}

module.exports = PostActions
