import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

class User extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    const { user } = this.props
    return ( 
      <div className="User">
        <Link to={`/${user.login}`}>
          <img src={user.avatarUrl} width="72" height="72" />
          <h3>{ user.login }</h3>
        </Link>
      </div>
    )
  }
}
 
User.PropTypes = {
  user: PropTypes.object
}

export default User