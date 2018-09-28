import {
  user,
  repo,
  starredRepo,
  stargazers
} from "../reducers/normalize"
import {
  USER_REQUEST_TYPE,
  STARRED_REPO_REQUEST_TYPE,
  REPO_REQUEST_TYPE,
  STARGAZERS_REQUEST_TYPE
} from "../actions/type"

export const getUserRequestData = (login, state) => ({
  entity: "USER",
  type: USER_REQUEST_TYPE, 
  endpoint: `users/${login}`,
  schema: user,
  input: login,
  state: state.entities.users[login],
  isCached: () => !!( state.paginate.starredRepo[login] )
})

export const getStarredRepoRequestData = (login, state) => ({
  entity: "STARRED_REPO",
  type: STARRED_REPO_REQUEST_TYPE,
  endpoint: `users/${login}/starred`,
  schema: starredRepo, 
  input: login,
  state: state.paginate.starredRepo[login],
  isCached: () => !!( state.paginate.starredRepo[login] ) 
})

export const getLoadMoreStarredRepoRequestData = (login, state) => Object.assign(getStarredRepoRequestData(login, state), {
  endpoint: state.paginate.starredRepo[login].nextPageUrl,
  isLoadMoreRequest: true 
})

export const getRepoRequestData = (loginRepo, state) => ({
  entity: "REPO",
  type: REPO_REQUEST_TYPE,
  endpoint: `repos/${loginRepo}`,
  schema: repo, 
  input: loginRepo,
  state: state.entities.repos[loginRepo],
  isCached: () => !!( state.entities.repos[loginRepo] ) 
})

export const getStargazersRequestData = (loginRepo, state) => ({
  entity: "STARGAZERS",
  type: STARGAZERS_REQUEST_TYPE,
  endpoint: `repos/${loginRepo}/stargazers`,
  schema: stargazers,
  input: loginRepo,
  state: state.paginate.stargazers[loginRepo],
  isCached: () => !!( state.paginate.stargazers[loginRepo] ) 
})

export const getLoadMoreStargazersRequestData = (loginRepo, state) => Object.assign(getStargazersRequestData(loginRepo, state), {
  endpoint: state.paginate.stargazers[loginRepo].nextPageUrl,
  isLoadMoreRequest: true 
})

export const isNeedFetch = (data) => {
  //  if state is not cached, it returns true.
  // if cahced, check if ILMR or not. if it is, return true otherwise false
  if (data.isCached()) {
    return (data.hasOwnProperty("isLoadMoreRequest") && data.endpoint) ? true : false  
  } 
  return true 
}