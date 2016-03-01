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
              <div className='sidebar-profile'>
                <img className='profilepicture user' src='./images/profile-leonardo.jpg'></img>
                  <li className='sidebar-name'>Leonardo DiCaprio</li>
                <p>I am a world class actor and I have been in several movies, my favourite being Gilbert Grape. #boatphobia #nevergettingmarried</p>
              </div>
            </ul>

            <ul className='nav nav-sidebar grid-images'>
              <img className='grid-pic' src='./images/grid-1.png'></img>
              <img className='grid-pic' src='./images/grid-2.png'></img>
              <img className='grid-pic' src='./images/grid-3.png'></img>
              <img className='grid-pic' src='./images/grid-4.png'></img>
              <img className='grid-pic' src='./images/grid-5.png'></img>
              <img className='grid-pic' src='./images/grid-6.png'></img>
              <img className='grid-pic' src='./images/grid-7.png'></img>
              <img className='grid-pic' src='./images/grid-8.png'></img>
              <img className='grid-pic' src='./images/grid-9.png'></img>
            </ul>

            <ul className='nav nav-sidebar'>
              <li className='sidebar-text'>Your Content</li>
              <li><Link to='authorsfeed'>Post Feed</Link></li>
              <li><Link to='addAuthor'>Create Post</Link></li>
              <li><Link to='authors'>Super Admin</Link></li>
            </ul>

          </div>

        </div>
      </div>

    )
  }
})

module.exports = Header
