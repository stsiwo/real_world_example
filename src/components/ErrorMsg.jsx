import React, { Component } from "react"
import { PropTypes } from "prop-types"

class ErrorMsg extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return ( 
      <div className="ErrorMsg">
        {this.props.errorMessage}
      </div>
     )
  }
}
 
ErrorMsg.PropTypes = {
  errorMessage: PropTypes.string
}

export default ErrorMsg