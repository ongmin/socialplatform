'use strict'

var React = require('react')
var Input = require('../common/textInput')
var GeoApp = require('react-geosuggest')

var ProfileForm = React.createClass({
  propTypes: {
    author:	React.PropTypes.object.isRequired,
    onSave:	React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function () {
    return (

      <form className='pageWrapper'>
        <fieldset>
        <h1>Create your profile</h1>

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

        <GeoApp
          label='Location'
          placeholder='Location' />

        <input
          name='inputPicture'
          label='Upload a picture'
          id='input-picture'
          className='input-file'
          type='file'
          value={this.props.author.profileImage}
          onChange={this.props.onChange}
          error={this.props.errors.profileImage} />

        <div className='groupWrapper groupButtons'>
          <input
            name='button-resetform'
            type='submit'
            value='Reset'
            id='button-resetform'
            className='btn btn-default'
            onClick={this.props.onSave} />

          <input
            name='button-submit'
            type='submit'
            value='Submit'
            id='button-submit'
            className='btn btn-success'
            onClick={this.props.onSave} />
        </div>

        </fieldset>
    </form>

    )
  }
})

module.exports = ProfileForm
