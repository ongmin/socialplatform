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
              <li className='sidebar-text'>Your Content</li>
              <li className='active'><a href='#'>Welcome <span className='sr-only'>(current)</span></a></li>
                <li><Link to='authorsfeed'>Post Feed</Link></li>
                <li><Link to='addAuthor'>Create Post</Link></li>
                <li><Link to='authors'>Super Admin</Link></li>
            </ul>

            <ul className='nav nav-sidebar'>
                <li className='sidebar-text'>Your Apps</li>
                <li><Link to='appQuoteGenerator'>Random Cat</Link></li>
                <li><Link to='app'>Random App</Link></li>
                <li><Link to='app'>Random App</Link></li>
            </ul>
          </div>

        </div>
      </div>

    )
  }
})

module.exports = Header
