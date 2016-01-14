'use strict'

var React = require('react')

var Router = require('react-router')
var DefaultRoute = Router.DefaultRoute
var Route = Router.Route
var NotFoundRoute = Router.NotFoundRoute
var Redirect = Router.Redirect

var routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name='authors' handler={require('./components/authors/authorPage')} />
    <Route name='addAuthor' path='author' handler={require('./components/authors/manageAuthorPage')} />
    <Route name='manageAuthor' path='author/:id' handler={require('./components/authors/manageAuthorPage')} />
    <Route name='about' handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from='about-us' to='about' />
    <Redirect from='about/*' to='about' />
    <Route name='landingPage' path='landingpage' handler={require('./components/landingPage')} />
    <Route name='managePost' path='post/' handler={require('./components/users/managePostPage')} />
    <Route name='appQuoteGenerator' path='app-quotegenerator' handler={require('./components/appQuoteGenerator')} />
    <Route name='addUser' path='user' handler={require('./components/users/manageProfilePage')} />
  </Route>
)

module.exports = routes
