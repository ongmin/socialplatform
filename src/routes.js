'use strict'

var React = require('react')

var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var NotFoundRoute = Router.NotFoundRoute
// var Redirect = Router.Redirect

var routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/authors/authorPageFeed')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Route name='home' handler={require('./components/homePage')} />
    <Route name='authors' handler={require('./components/authors/authorPage')} />
    <Route name='authorsfeed' handler={require('./components/authors/authorPageFeed')} />
    <Route name='addAuthor' path='author' handler={require('./components/authors/manageAuthorPage')} />
    <Route name='manageAuthor' path='author/:id' handler={require('./components/authors/manageAuthorPage')} />
    <Route name='about' handler={require('./components/about/aboutPage')} />
    <Route name='managePost' path='post/' handler={require('./components/users/managePostPage')} />
    <Route name='surprise' path='surprise' handler={require('./components/appSurprise')} />
    <Route name='addUser' path='user' handler={require('./components/users/manageProfilePage')} />
  </Route>
)

module.exports = routes
