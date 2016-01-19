'use strict'

var React = require('react')
var Input = require('../common/textInput')
var GeoApp = require('react-geosuggest')

var AuthorForm = React.createClass({
  propTypes: {
    author:	React.PropTypes.object.isRequired,
    onSave:	React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function () {
    return (
      <form>
        <h2>Posts</h2>
        <Input
          name='firstName'
          label='First Name'
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName} />

        <Input
          name='lastName'
          label='Last Name'
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName} />

          <Input
            labelClassName='col-xs-2'
            wrapperClassName='col-xs-10'
            name='content'
            label='Status'
            type='textarea'
            value={this.props.author.content}
            onChange={this.props.onChange}
            error={this.props.errors.content} />

        <GeoApp />

      <div className='groupWrapper groupButtons'>

        <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave} />
      </div>

      </form>
    )
  }
})

module.exports = AuthorForm
