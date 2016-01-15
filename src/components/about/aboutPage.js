'use strict'

var React = require('react')

var About = React.createClass({
  render: function () {
    return (
      <div className='pageWrapper'>
        <h1>About</h1>
          <p>Letsgetsocial is a generic framework for creating your own interest-based community and surrounding yourself with people you dig.</p>
          <p>Built with React, React Router, and Flux.</p>
        <p>This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    )
  }
})

module.exports = About
