'use strict'

var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var AuthorActions = require('../../actions/authorActions')
var toastr = require('toastr')

var AuthorList = React.createClass({
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
        <tr key={author.id}>
          <td><Link to='manageAuthor' params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
          <td>{author.content}</td>
          <td>{author.timestamp}</td>
          <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
        </tr>
      )
    }

    return (
      <div>
        <table className='table'>
          <thead>
            <th className='table-id'>ID</th>
            <th className='table-name'>Name</th>
            <th className='table-content'>Status</th>
            <th className='table-option'>Timestamp</th>
            <th className='table-option'>Manage</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = AuthorList
