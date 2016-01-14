'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var UserApi = require('../api/userApi')
var ActionTypes = require('../constants/actionTypes')

var UserActions = {
  createUser: function (user) {
    var newUser = UserApi.saveUser(user)

// Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_USER,
      user: newUser
    })
  },

  updateUser: function (user) {
    var updatedUser = UserApi.saveUser(user)

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_USER,
      user: updatedUser
    })
  },

  deleteUser: function (id) {
    UserApi.deleteUser(id)

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_User,
      id: id
    })
  }
}

module.exports = UserActions
