import React, { Component } from "react"
import { PropTypes } from "prop-types"

class SearchBtn extends Component {
  constructor(props) {
    super(props)
    this.onClickSearchBtn = this.onClickSearchBtn.bind(this)
  }
  onClickSearchBtn() {
    this.props.history(`/${this.props.searchInput}`)
  }
  render() { 
    const btnLabel = "Search User/Repo"
    return ( 
      <button 
        type="button"
        onClick={this.onClickSearchBtn}
      >{btnLabel}</button>
     )
  }
}

SearchBtn.PropTypes = {
  searchInput: PropTypes.string
}

export default SearchBtn