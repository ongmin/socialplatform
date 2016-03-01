'use strict'

var React = require('react')
var Input = require('../common/textInput')

var PostForm = React.createClass({
  propTypes: {
    post:	React.PropTypes.object.isRequired,
    onSave:	React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function () {
    return (

      <form className='pageWrapper'>
        <fieldset>
        <h1>Manage Post</h1>

        <Input
          name='userName'
          label='Username'
          value={this.props.post.userName}
          onChange={this.props.onChange}
          error={this.props.errors.userName} />

        <Input
          name='content'
          label='Post'
          value={this.props.post.content}
          onChange={this.props.onChange}
          error={this.props.errors.content} />

        <input
          name='inputPicture'
          label='Upload a picture'
          id='input-picture'
          className='input-file'
          type='file'
          value={this.props.post.picture}
          onChange={this.props.onChange}
          error={this.props.errors.picture} />

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
