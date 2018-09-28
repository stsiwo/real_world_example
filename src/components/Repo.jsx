import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
class Repo extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    const { repo } = this.props
    const user = repo.fullName.split("/")[0]
    return ( 
      <div className="Repo">
        <Link to={`/${repo.fullName}`}>
          <span>{repo.name}</span>
        </Link>
        {` by `}
        <Link to={`/${user}`}>
          <span>{user}</span>
        </Link>
        <p>{repo.description}</p>
      </div>
    )
  }
}

Repo.PropTypes = {
  repo: PropTypes.object
}
 
export default Repo