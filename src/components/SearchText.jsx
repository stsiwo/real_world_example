import React, { Component } from "react"
import PropTypes from "prop-types"

class SearchText extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.handleInput(e.target.value)
  }
  render() { 
    const { searchInput } = this.props
    return ( 
      <input type="text" 
        placeholder="input git repo or user..."
        value={searchInput}
        onChange={this.handleChange}
      />
    )
  }
}

SearchText.PropTypes = {
  searchInput: PropTypes.string,
  handleInput: PropTypes.func
}
export default SearchText
