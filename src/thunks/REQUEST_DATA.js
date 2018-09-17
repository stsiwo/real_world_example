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
  endpoint: `/users/${login}`,
  schema: user,
  input: login,
  state: state.entities.users[login]
})

export const getStarredRepoRequestData = (login, state) => ({
  entity: "STARRED_REPO",
  type: STARRED_REPO_REQUEST_TYPE,
  endpoint: `/users/${login}/starred`,
  schema: starredRepo, 
  input: login,
  state: state.paginate.starredRepo[login]
})

export const getRepoRequestData = (loginRepo, state) => ({
  entity: "REPO",
  type: REPO_REQUEST_TYPE,
  endpoint: `/repos/${loginRepo}`,
  schema: repo, 
  input: loginRepo,
  state: state.entities.repos[loginRepo]
})

export const getStargazersRequestData = (loginRepo, state) => ({
  entity: "STARGAZERS",
  type: STARGAZERS_REQUEST_TYPE,
  endpoint: `/repo/${loginRepo}/stargazers`,
  schema: stargazers,
  input: loginRepo,
  state: state.paginate.stargazers[loginRepo]
})

