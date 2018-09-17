import React, { Component } from "react"
import PropTypes from "prop-types"

class SearchText extends Component {
  constructor(props) {
    super(props)
  }
  handleInput(e) {
    this.props.handleInput(e)
  }
  render() { 
    const { searchInput } = this.props
    return ( 
      <input type="text" 
        placeholder="input git repo or user..."
        value={searchInput}
        onChange={(e) => handleInput(e)}
      />
    )
  }
}

SearchText.PropTypes = {
  searchInput: PropTypes.string,
  handleInput: PropTypes.func
}
export default SearchText
