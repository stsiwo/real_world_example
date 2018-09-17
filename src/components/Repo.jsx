import React, { Component } from "react"
import { PropTypes } from "prop-types"

class Repo extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    const { repo } = this.props
    return ( 
      <div className="Repo">
        <p>{ repo.name } by { repo.owner.login }</p> 
        <p>{ repo.description }</p>
      </div>
     )
  }
}

Repo.PropTypes = {
  repo: PropTypes.object
}
 
export default Repo