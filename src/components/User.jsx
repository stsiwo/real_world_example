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
          <img src={user.avatar_url} />
          <h3>{ user.name }</h3>
        </Link>
      </div>
    )
  }
}
 
User.PropTypes = {
  user: PropTypes.object
}

export default User