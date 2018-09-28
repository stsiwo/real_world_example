import React, { Component, Fragment } from "react"
import { PropTypes } from "prop-types"
import Repo from "./Repo"
import User from "./User"
import List from "./List"

class RepoPage extends Component {
  constructor(props) {
    super(props)
    this.props.loadData()
    this.renderItem = this.renderItem.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.loadMoreClick = this.loadMoreClick.bind(this)
    // from MDTP
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loginRepo !== this.props.loginRepo) this.props.loadData() 
  }
  renderItem(user) {
    return <User key={user.id} user={user} /> 
  }
  renderLoading() {
    return <p>Loading....</p>
  }
  loadMoreClick() {
    // from MDTP 
    this.props.loadMoreData() 
  }
  render() { 
    const { repo, errorMessage } = this.props
    if (!repo && !errorMessage) return this.renderLoading()
    if (errorMessage) return null

    const { stargazers, nextPageUrl } = this.props
    return (
      <Fragment>
        <Repo repo={repo} />
        <hr />
        <List 
          items={stargazers}
          nextPageUrl={nextPageUrl}
          loadMoreClick={this.loadMoreClick}
          renderItem={this.renderItem}
        />
      </Fragment>
    )
  }
}
 
RepoPage.PropTypes = {
  loginRepo: PropTypes.string,
  repo: PropTypes.object,
  stargazers: PropTypes.array,
  isFetching: PropTypes.boolean,
  nextPageUrl: PropTypes.string,
  loadData: PropTypes.func,
  loadMoreData: PropTypes.func
}

export default RepoPage
