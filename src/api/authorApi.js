'use strict'

//This file is mocking a web API by hitting hard coded data.
var authors = require('./authorData').authors
var _ = require('lodash')

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (author) {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase()
}

var _generateTimestamp = function (post) {
  return (new Date()).toISOString()
}

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)) // return cloned copy so that the item is passed by value instead of by reference
}

var AuthorApi = {
  getAllAuthors: function () {
    return _clone(authors)
  },

  getAuthorById: function (id) {
    var author = _.find(authors, {id: id})
    return _clone(author)
  },

  saveAuthor: function (author) {
    // Pretend an ajax call to web api is made here
    console.log('Pretend this just saved the post to the DB... Oh! So Cool!!')

    if (author.id) {
      var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}))
      authors.splice(existingAuthorIndex, 1, author)
    } else {
      // Just simulating creation here.
      // The server would generate ids for new authors in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      author.id = _generateId(author)
      author.timestamp = _generateTimestamp(author)
      authors.push(author)
    }

    return _clone(author)
  },

  deleteAuthor: function (id) {
    console.log('Pretending that this just deleted the post from the DB...')
    _.remove(authors, { id: id })
  }
}

module.exports = AuthorApi
