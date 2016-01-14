'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'

var _posts = []

var PostStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  getAllPosts: function () {
    return _posts
  },

  getPostById: function (id) {
    return _.find(_posts, {id: id})
  }
})

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _posts = action.initialData.posts
      PostStore.emitChange()
      break
    case ActionTypes.CREATE_POST:
      _posts.push(action.post)
      PostStore.emitChange()
      break
    case ActionTypes.UPDATE_POST:
      var existingPost = _.find(_posts, {id: action.post.id})
      var existingPostIndex = _.indexOf(_posts, existingPost)
      _posts.splice(existingPostIndex, 1, action.post)
      PostStore.emitChange()
      break
    case ActionTypes.DELETE_POST:
      _.remove(_posts, function (post) {
        return action.id === post.id
      })
      PostStore.emitChange()
      break
    default:
      // no op
  }
})

module.exports = PostStore
