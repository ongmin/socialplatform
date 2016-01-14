'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3 col-md-2 sidebar'>
            <ul className='nav nav-sidebar'>

              <li className='active'><a href='#'>Overview <span className='sr-only'>(current)</span></a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Export</a></li>
            </ul>
            <ul className='nav nav-sidebar'>
              <li><a href="">Nav item</a></li>
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
              <li><a href="">More navigation</a></li>
            </ul>
          </div>


        </div>
      </div>

    )
  }
})

module.exports = Header
