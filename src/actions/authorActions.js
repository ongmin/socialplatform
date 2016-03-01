// 'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi')
var ActionTypes = require('../constants/actionTypes')

var AuthorActions = {
  login: function (token) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      token: token
    })
  },
  logout: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT
    })
  },

  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author)

// Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })
  },

  updateAuthor: function (author) {
    var updatedAuthor = AuthorApi.saveAuthor(author)

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  },

  deleteAuthor: function (id) {
    AuthorApi.deleteAuthor(id)

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  },

  login: function (token) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      token: token
    })
  },

  logout: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT
    })
  }
}

module.exports = AuthorActions
