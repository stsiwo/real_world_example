import React, { Component, Fragment } from "react"
import { PropTypes } from "prop-types"
import Repo from "./Repo"
import User from "./User"
import List from "./List"

class UserPage extends Component {
  constructor(props) {
    super(props)
    console.log("inside constructor")
    this.renderItem = this.renderItem.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.loadMoreClick = this.loadMoreClick.bind(this)
    // from MDTP
  }
  componentDidMount() {
    console.log("inside componentdidmount")
    this.props.loadData()
  }
  componentDidUpdate(prevProps) {
    console.log("inside compoentndidupdate")
    console.log(prevProps.login)
    console.log(this.props.login)

    if (prevProps.login !== this.props.login) this.props.loadData() 
  }
  renderItem(repo) {
    return <Repo key={repo.id} repo={repo} /> 
  }
  renderLoading() {
    return <p>Loading....</p>
  }
  loadMoreClick() {
    // from MDTP 
    this.props.loadMoreData() 
  }
  render() { 
    const { user, errorMessage } = this.props
    if (!user && !errorMessage) return this.renderLoading()
    if (errorMessage) return null

    const { starredRepo, nextPageUrl } = this.props
    return (
      <Fragment>
        <User user={user} />
        <hr />
        <List 
          items={starredRepo}
          nextPageUrl={nextPageUrl}
          loadMoreClick={this.loadMoreClick}
          renderItem={this.renderItem}
        />
      </Fragment>
    )
  }
}
 
UserPage.PropTypes = {
  login: PropTypes.string,
  user: PropTypes.object,
  starredRepo: PropTypes.array,
  isFetching: PropTypes.boolean,
  nextPageUrl: PropTypes.string,
  loadData: PropTypes.func,
  loadMoreData: PropTypes.func
}

export default UserPage