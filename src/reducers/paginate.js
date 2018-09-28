import { combineReducers } from "redux"
import eachStarredRepo from "./starredRepo"
import eachStargazer from "./stargazers"
import {
  STARRED_REPO_REQUEST_TYPE,
  STARGAZERS_REQUEST_TYPE 
} from "../actions/type"

const starredRepo = (state = {}, action) => {

  switch(action.type) {
    case STARRED_REPO_REQUEST_TYPE.REQUEST:
    case STARRED_REPO_REQUEST_TYPE.SUCCESS:
    case STARRED_REPO_REQUEST_TYPE.FAIL:
      return {
        ...state,
        [action.key]: eachStarredRepo(state[action.key], action)
      }
    default: 
      return state 
  }
}

const stargazers = (state = {}, action) => {

  switch(action.type) {
    case STARGAZERS_REQUEST_TYPE.REQUEST:
    case STARGAZERS_REQUEST_TYPE.SUCCESS:
    case STARGAZERS_REQUEST_TYPE.FAIL:
      return {
        ...state,
        [action.key]: eachStargazer(state[action.key], action)
      }
    default: 
      return state 
  }
}

export const paginate = combineReducers({
  starredRepo,
  stargazers 
})