import propTypes from "prop-types"
import React, { Component, Fragment } from "react"
import ErrorMsg from "./ErrorMsg"
import Title from "./Title"
import Form from "./Form"
class Explore extends Component {
  constructor(props) {
    super(props)
    this.renderErrorMsg = this.renderErrorMsg.bind(this)
  }
  renderErrorMsg() {
    return this.props.errorMessage ? <ErrorMsg errorMessage={this.props.errorMessage} /> : null
  }
  render() {
    return ( 
      <Fragment>
        <Title/>
        <Form/>
      </Fragment>      
    )
  }
}

Explore.propTypes = {
  errorMessage: propTypes.string
}

export default Explore
