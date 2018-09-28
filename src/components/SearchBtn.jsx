import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { withRouter } from "react-router"

class SearchBtn extends Component {
  constructor(props) {
    super(props)
    this.onClickSearchBtn = this.onClickSearchBtn.bind(this)
  }
  onClickSearchBtn() {
    const { history } = this.props
    this.props.resetErrorMessage() 
    history.push(`/${this.props.searchInput}`)
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
  searchInput: PropTypes.string,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  resetErrorMessage: PropTypes.func
}

const SearchBtnWithRouter = withRouter(SearchBtn)

export default SearchBtnWithRouter