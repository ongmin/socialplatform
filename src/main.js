'use strict'

global.jQuery = require('jquery')
require('./js/bootstrap.min')
require('./js/holder.min')
require('./js/ie-emulation-modes-warning')
require('./js/ie10-viewport-bug-workaround')

var React = require('react')
var Router = require('react-router')
var routes = require('./routes')
var InitializeActions = require('./actions/initializeActions')

InitializeActions.initApp()

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'))
})
