import propTypes from "prop-types"
import React, { Component, Fragment } from "react"
import ErrorMsg from "./ErrorMsg"
import Title from "./Title"
import Form from "./Form"
import CSSModules from "react-css-modules"
import styles from "./Explore.css" 

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
        {this.renderErrorMsg()}
      </Fragment>      
    )
  }
}

Explore.propTypes = {
  errorMessage: propTypes.string
}

export default CSSModules(Explore, styles, {allowMultiple: true} )