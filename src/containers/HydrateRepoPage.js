import { connect } from "react-redux"
import RepoPage from "../components/RepoPage"
import { loadRepoPageThunk , loadStargazersMoreThunk } from "../thunks"

const mapStateToProps = (state, ownProps) => {
  
  const login = ownProps.match.params.login
  const repo = ownProps.match.params.repo
  const loginRepo = `${login}/${repo}`

  const { items, isFetching, nextPageUrl } = state.paginate.stargazers[loginRepo] || { items: [] }
  const stargazers = items.map(id => state.entities.users[id])

  return {
    loginRepo: loginRepo,
    repo: state.entities.repos[loginRepo],
    stargazers: stargazers, 
    isFetching: isFetching,
    nextPageUrl: nextPageUrl, 
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const login = ownProps.match.params.login
  const repo = ownProps.match.params.repo
  const loginRepo = `${login}/${repo}`
  
  return {
    loadData: () => dispatch(loadRepoPageThunk(loginRepo)),
    loadMoreData: () => dispatch(loadStargazersMoreThunk(loginRepo)),
  }
}
const HydrateRepoPage = connect (
  mapStateToProps,
  mapDispatchToProps
)(RepoPage)

export default HydrateRepoPage
