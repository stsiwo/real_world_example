import React, { Component, Fragment } from "react"
import { PropTypes } from "prop-types"

class List extends Component {
  
  constructor(props) {
    super(props)
    this.renderLoadMoreBtn = this.renderLoadMoreBtn.bind(this)
    this.loadMoreClick = this.loadMoreClick.bind(this)
  }
  loadMoreClick() {
    this.props.loadMoreClick()
  }
  renderLoadMoreBtn() {
    const btnLabel = "Load More"

    return <button 
      type="button" 
      onClick={this.loadMoreClick}
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