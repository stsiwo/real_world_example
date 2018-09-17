import React, { Component, Fragment } from "react"
import { PropTypes } from "prop-types"

class List extends Component {
  
  constructor(props) {
    super(props)
    this.loadMoreClick = this.loadMoreClick.bind(this)
  }
  renderLoadMoreBtn() {
    const btnLabel = "Load More"
    const { loadMoreClick } = this.props

    return <button 
      type="button" 
      onClick={loadMoreClick}
    >{btnLabel}</button>
  }
  render() { 
    const { items, renderItem, nextPageUrl } = this.props

    return (  
      <Fragment>
        {items.map(item => {
          return renderItem(item)
        })}
        { nextPageUrl && this.renderLoadMoreBtn() }
      </Fragment>
      
    )
  }
}
 
List.PropTypes = {
  items: PropTypes.array,
  nextPageUrl: PropTypes.nextPageUrl,
  loadMoreClick: PropTypes.func
}

export default List