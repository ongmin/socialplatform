'use strict'

var React = require('react')
var Input = require('../common/textInput')

var PostForm = React.createClass({
  // propTypes: {
  //   author:	React.PropTypes.object.isRequired,
  //   onSave:	React.PropTypes.func.isRequired,
  //   onChange: React.PropTypes.func.isRequired,
  //   errors: React.PropTypes.object
  // },

  render: function () {
    return (

      <form className='pageWrapper'>
        <fieldset>
        <h1>Make A Post</h1>

        <Input
          name='currentLocation'
          label='Current Location'
          value={this.props.author.currentLocation}
          onChange={this.props.onChange}
          error={this.props.errors.currentLocation} />

        <input
          name='inputPicture'
          label='Upload a picture'
          id='input-picture'
          className='input-file'
          type='file'
          value={this.props.author.currentLocation}
          onChange={this.props.onChange}
          error={this.props.errors.currentLocation} />

        <div className='groupWrapper groupButtons'>

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

module.exports = PostForm
