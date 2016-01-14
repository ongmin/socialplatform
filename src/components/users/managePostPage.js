'use strict'

var React = require('react')
var Router = require('react-router')
var PostForm = require('./postForm')
var PostActions = require('../../actions/postActions')
var PostStore = require('../../stores/postStore')
var toastr = require('toastr')

var ManagePostPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort()
      }
    }
  },

  getInitialState: function () {
    return {
      post: { id: '', userName: '', content: '', picture: '', timestamp: '' },
      errors: {},
      dirty: false
    }
  },

  componentWillMount: function () {
    var postId = this.props.params.id //from the path '/post:id'
    if (postId) {
      this.setState({ post: PostStore.getPostById(postId) })
    }
  },

  setPostState: function (event) {
    this.setState({dirty: true})
    var field = event.target.name
    var value = event.target.value
    this.state.post[field] = value
    return this.setState({post: this.state.author})
  },

  postFormIsValid: function () {
    var formIsValid = true
    this.state.errors = {} // clear any previous errors.

    if (this.state.post.userName.length < 2) {
      this.state.errors.firstName = 'Username be at least 2 characters.'
      formIsValid = false
    }

    if (this.state.post.content.length < 1) {
      this.state.errors.lastName = 'You must post at least 1 character.'
      formIsValid = false
    }

    this.setState({errors: this.state.errors})
    return formIsValid
  },

  savePost: function (event) {
    event.preventDefault()

    if (!this.postFormIsValid()) {
      return
    }

    if (this.state.post.id) {
      PostActions.updatePost(this.state.post)
    } else {
      PostActions.createPost(this.state.post)
    }

    this.setState({dirty: false})
    toastr.success('Post saved.')
    this.transitionTo('posts')
  },

  render: function () {
    return (
      <PostForm
        post={this.state.post}
        onChange={this.setPostState}
        onSave={this.savePost}
        errors={this.state.errors} />
    )
  }
})

module.exports = ManagePostPage
