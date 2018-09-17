import React, { Component, Fragment } from "react"
import SearchText from "./SearchText"
import SearchBtn from "./SearchBtn"


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.setState({ searchInput: e.target.value }) 
  }
  render() { 
    return (  
      <Fragment>
        <SearchText 
          searchInput={this.state.searchInput} 
        />
        <SearchBtn 
          searchInput={this.state.searchInput}
          handleInput={this.handleInput} 
        />
      </Fragment>
    )
  }
}
 
export default Form