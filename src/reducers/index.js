// reducers top level:
//   entities: (from normalizer)
//   paginate: (detail in paginate.js)
//   errorMessage: fetch error message

import { combineReducers } from "redux"
import merge from "loadsh/merge"
import { paginate } from "./paginate"

const entities = (state = {users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  } 
}

const errorMessage = (state = null, action) {
  if (error in action.data) {
    return {
      ...state,
      errorMessage: action.data.error
    }    
  }
  return state 
}
const rootReducer = combineReducers({
  entities,
  paginate,
  errorMessage
})