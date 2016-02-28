'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var AuthorActions = require('../../actions/authorActions')
var toastr = require('toastr')

var PostPanels = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function (id, event) {
    event.preventDefault()
    AuthorActions.deleteAuthor(id)
    toastr.success('Author Deleted')
  },

  render: function () {
    var createAuthorRow = function (author) {
      return (

          <div className='post-whole'>
            <div className='post-left'>
            <img className='profilepicture' src='./images/ProfilePicturePlaceholder.jpg'></img>
            </div>
            <div className='post-right'>
              <div className='post-heading'>{author.firstName} {author.lastName}<a href='#' className='alignright' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></div>
              <div className='post-body'>{author.content}</div>
              <div className='post-actions'><i className='fa fa-share'></i><i className='fa fa-star'></i><i className='fa fa-retweet'>#</i><i className='fa fa-ellipsis-h'></i></div>
            </div>
          </div>
      )
    }

    return (
      <div>
            {this.props.authors.map(createAuthorRow, this)}
      </div>
    )
  }
})

module.exports = PostPanels
