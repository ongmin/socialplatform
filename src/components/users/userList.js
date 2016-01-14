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
    var createUserRow = function (user) {
      return (
        <tr key={user.id}>
          <td><a href='#' onClick={this.deleteAuthor.bind(this, user.id)}>Delete</a></td>
          <td><Link to='manageProfilePage' params={{id: user.id}}>{user.id}</Link></td>
          <td>{user.firstName} {user.lastName}</td>
          <td>{user.city}</td>
        </tr>
      )
    }

    return (
      <div>
        <table className='table'>
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </thead>
          <tbody>
            {this.props.authors.map(createUserRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = AuthorList
