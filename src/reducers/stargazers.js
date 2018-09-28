import { STARGAZERS_REQUEST_TYPE } from "../actions/type"
import union from "lodash/union"

const eachStargazer = (state = {
  items: [],
  isFetching: false,
  nextPageUrl: ""
}, action) => {
  
  switch(action.type) {
    case STARGAZERS_REQUEST_TYPE.REQUEST:
      return {
        ...state,
        isFetching: true
      } 
    case STARGAZERS_REQUEST_TYPE.SUCCESS:
      return {
        ...state,
        items: union(state.items, action.data.result),
        isFetching: false,
        nextPageUrl: action.data.nextPageUrl
      }  
    case STARGAZERS_REQUEST_TYPE.FAIL:
      return {
        ...state,
        isFetching: false
      }
    }
}
export default eachStargazer
