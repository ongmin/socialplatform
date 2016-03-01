'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var PostActions = require('../../actions/postActions')
var toastr = require('toastr')

var PostFeed = React.createClass({
  propTypes: {
    posts: React.PropTypes.array.isRequired
  },

  deletePost: function (id, event) {
    event.preventDefault()
    PostActions.deletePost(id)
    toastr.success('Post Deleted')
  },

  render: function () {
    var createPost = function (post) {
      return (
        <tr key={post.id}>
          <td><Link to='managePost' params={{id: post.id}}>{post.id}</Link></td>
          <td><a href='#' onClick={this.deletePost.bind(this, post.id)}>Deleteeeee</a></td>
          <td>{post.userName} {post.content}</td>
          <td>{post.timestamp}</td>
        </tr>
      )
    }

    return (

      <div>
        <table className='table'>
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name Content</th>
            <th>Time</th>
          </thead>
          <tbody>
            {this.props.posts.map(createPost, this)}
          </tbody>
        </table>
      </div>

    )
  }
})

module.exports = PostFeed
