import { connect } from "react-redux"
import UserPage from "../components/UserPage"
import { loadUserPageThunk , loadStarredRepoMoreThunk } from "../thunks"

const mapStateToProps = (state, ownProps) => {
  
  const login = ownProps.match.params.login
  const { items, isFetching, nextPageUrl } = state.paginate.starredRepo[login]

  return {
    user: state.entities.users[login],
    starredRepo: items, 
    isFetching: isFetching,
    nextPageUrl: nextPageUrl 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const login = ownProps.match.params.login

  return {
    laodData: dispatch(loadUserPageThunk(login)),
    loadMoreData: dispatch(loadStarredRepoMoreThunk(login))
  }
}
const HydrateUserPage = connect (
  mapStateToProps,
  mapDispatchToProps
)(UserPage)

export default HydrateUserPage