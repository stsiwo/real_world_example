import PropTypes from 'prop-types'
import { Component } from "react"

class Explore extends Component {
  constructor(props) {
    super(props)
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

Explore.PropTypes = {
  errorMessage: PropTypes.string
}

export default Explore
