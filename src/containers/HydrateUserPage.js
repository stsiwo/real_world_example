import { connect } from "react-redux"
import UserPage from "../components/UserPage"
import { loadUserPageThunk , loadStarredRepoMoreThunk } from "../thunks"

const mapStateToProps = (state, ownProps) => {
  
  const login = ownProps.match.params.login
  const { items, isFetching, nextPageUrl } = state.paginate.starredRepo[login] || { items: [] }
  const starredRepo = items.map(id => state.entities.repos[id])
  console.log("inside mstp")
  return {
    login: login,
    user: state.entities.users[login],
    starredRepo: starredRepo, 
    isFetching: isFetching,
    nextPageUrl: nextPageUrl, 
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const login = ownProps.match.params.login

  return {
    loadData: () => dispatch(loadUserPageThunk(login)),
    loadMoreData: () => dispatch(loadStarredRepoMoreThunk(login)),
  }
}
const HydrateUserPage = connect (
  mapStateToProps,
  mapDispatchToProps
)(UserPage)

export default HydrateUserPage