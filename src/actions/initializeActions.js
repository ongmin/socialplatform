'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var AuthorApi = require('../api/authorApi')
var UserApi = require('../api/userApi')

var InitializeActions = {
  initApp: function () {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(),
        users: UserApi.getAllUsers()
      }
    })
  }
}

module.exports = InitializeActions
