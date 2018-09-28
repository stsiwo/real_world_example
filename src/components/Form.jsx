import React, { Component, Fragment } from "react"
import SearchText from "./SearchText"
import EventSearchBtn from "../containers/EventSearchBtn";


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(value) {
    this.setState({ searchInput: value }) 
  }
  render() { 
    return (  
      <Fragment>
        <SearchText 
          searchInput={this.state.searchInput} 
          handleInput={this.handleInput} 
        />
        <EventSearchBtn 
          searchInput={this.state.searchInput}
        />
      </Fragment>
    )
  }
}
 
export default Form