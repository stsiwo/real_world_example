// reducers top level:
//   entities: (from normalizer)
//   paginate: (detail in paginate.js)
//   errorMessage: fetch error message
import { combineReducers } from "redux"
import merge from "lodash/merge"
import { paginate } from "./paginate"
import {
  USER_REQUEST_TYPE,
  STARRED_REPO_REQUEST_TYPE,
  REPO_REQUEST_TYPE,
  STARGAZERS_REQUEST_TYPE,
  RESET_ERROR_MESSAGE
} from "../actions/type"

const entities = (state = {users: {}, repos: {} }, action) => {
  if (action.data && action.data.entities) {
    return merge({}, state, action.data.entities)
  } 
  return state
}

const errorMessage = (state = null, action) => {
  switch(action.type) {
    case USER_REQUEST_TYPE.FAIL:
    case STARGAZERS_REQUEST_TYPE.FAIL:
    case REPO_REQUEST_TYPE.FAIL:
    case STARRED_REPO_REQUEST_TYPE.FAIL:
      return action.data.error
    case RESET_ERROR_MESSAGE:
      return null
    default:
      return state
  }
}

export default combineReducers({
  entities,
  paginate,
  errorMessage
})