import { combineReducers } from "redux"
import { getStarredRepoRequestData, getStargazersRequestData } from "../thunks/REQUEST_DATA"
import eachStarredRepo from "./starredRepo"
import eachStargazer from "./stargazers"

const starredRepo = (state = {}, action) => {
  const starredRepoRequestData = getStarredRepoRequestData()

  switch(action.type) {
    case starredRepoRequestData.REQUEST:
    case starredRepoRequestData.SUCCESS:
    case starredRepoRequestData.FAIL:
      return {
        ...state,
        [action.data.login]: eachStarredRepo(state[action.data.login], action)
      }
    default: 
      return state 
  }
}

const stargazers = (state = {}, action) => {
  const stargazersRequestData = getStargazersRequestData()

  switch(action.type) {
    case stargazersRequestData.REQUEST:
    case stargazersRequestData.SUCCESS:
    case stargazersRequestData.FAIL:
      return {
        ...state,
        [action.data.fullName]: eachStargazer(state[action.data.fullName], action)
      }
    default: 
      return state 
  }
}

export const paginate = combineReducers({
  starredRepo,
  stargazers 
})