/* global Auth0Lock */
'use strict'

var Dispatcher = require('../dispatcher/appDispatcher')
var ActionTypes = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var _ = require('lodash')
var CHANGE_EVENT = 'change'

var _authors = []

var AuthorStore = assign({}, EventEmitter.prototype, {

  lock: new Auth0Lock('bkUJ0ZSdxnXxoO2QETnLLh6cIqYqM8hv', 'makantime.auth0.com'),
  token: null,

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  getAllAuthors: function () {
    return _authors
  },

  getAuthorById: function (id) {
    return _.find(_authors, {id: id})
  },

  // User Authentication
  login: function (token) {
    if (token) {
      this.lock.getProfile(token, (err, profile) => {
        if (err) return console.error('Error loading the Profile', err)
        else {
          this.user = profile
          this.emitChange()
          window.fetch('/users/' + profile.user_id, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
          }).then(res => {
            if (res.status === 404) {
              window.fetch('/users', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
              })
            }
          })
        }
      })
    } else {
      this.lock.show({
        callbackURL: window.location.origin,
        responseType: 'token'
      })
    }
  },

  logout: function () {
    this.user = null
    window.localStorage.removeItem('userToken')
  },

// parseToken aka getIdToken in React Auth0 tutorial
  parseToken: function () {
    var idToken = window.localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        window.localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.error('Error signing in', authHash)
        return null
      }
    }
    if (idToken) {
      this.token = idToken
      this.login(this.token)
    }
  },

  getToken: function () {
    return this.token
  }

})

Dispatcher.register(function (action) {
  switch (action.actionType) {

    // For Authentication
    case ActionTypes.LOGIN:
      AuthorStore.login(action.token)
      AuthorStore.emitChange()
      break
    case ActionTypes.LOGOUT:
      AuthorStore.logout()
      AuthorStore.emitChange()
      break

    // For Post Updating
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors
      AuthorStore.emitChange()
      break
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author)
      AuthorStore.emitChange()
      break
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, {id: action.author.id})
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor)
      _authors.splice(existingAuthorIndex, 1, action.author)
      AuthorStore.emitChange()
      break
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function (author) {
        return action.id === author.id
      })
      AuthorStore.emitChange()
      break

    default:
      // no op
  }
})

module.exports = AuthorStore
