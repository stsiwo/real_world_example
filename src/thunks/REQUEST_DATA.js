export const getUserRequestData = (login, state) => ({
  entity: "USER",
  type: getUserRequestType(),
  endpoint: `/users/${login}`,
  schema: null, // later
  input: login,
  state: state.entities.users[login]
})

const getUserRequestType = () => ({
  REQUEST: "USER_REQUEST",
  SUCCESS: "USER_SUCCESS",
  FAIL: "USER_FAIL"
})

export const getStarredRepoRequestData = (login, state) => ({
  entity: "STARRED_REPO",
  type: getStarredRepoRequestType(),
  endpoint: `/users/${login}/starred`,
  schema: null, // later
  input: login,
  state: state.pagenate.starredRepo[login]
})

const getStarredRepoRequestType = () => ({
  REQUEST: "STARRED_REPO_REQUEST",
  SUCCESS: "STARRED_REPO_SUCCESS",
  FAIL: "STARRED_REPO_FAIL"
})


export const getRepoRequestData = (loginRepo, state) => ({
  entity: "REPO",
  type: getRepoRequestType(),
  endpoint: `/repos/${loginRepo}`,
  schema: null, // later
  input: loginRepo,
  state: state.entities.repos[loginRepo]
})

const getRepoRequestType = () => ({
  REQUEST: "REPO_REQUEST",
  SUCCESS: "REPO_SUCCESS",
  FAIL: "REPO_FAIL"
})

export const getStargazersRequestData = (loginRepo, state) => ({
  entity: "STARGAZERS",
  type: getStargazersRequestType(),
  endpoint: `/repo/${loginRepo}/stargazers`,
  schema: null, // later
  input: loginRepo,
  state: state.pagenate.stargazers[loginRepo]
})

const getStargazersRequestType = () => ({
  REQUEST: "STARGAZERS_REQUEST",
  SUCCESS: "STARGAZERS_SUCCESS",
  FAIL: "STARGAZERS_FAIL"
})
