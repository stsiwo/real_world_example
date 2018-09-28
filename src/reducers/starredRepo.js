import { STARRED_REPO_REQUEST_TYPE } from "../actions/type"
import union from "lodash/union"

const eachStarredRepo = (state = {
  items: [],
  isFetching: false,
  nextPageUrl: ""
}, action) => {
  
  switch (action.type) {
    case STARRED_REPO_REQUEST_TYPE.REQUEST:
      return {
        ...state,
        isFetching: true
      } 
    case STARRED_REPO_REQUEST_TYPE.SUCCESS:
      return {
        ...state,
        items: union(state.items, action.data.result),
        isFetching: false,
        nextPageUrl: action.data.nextPageUrl
      }  
    case STARRED_REPO_REQUEST_TYPE.FAIL:
      return {
        ...state,
        isFetching: false
      }
    }
}
export default eachStarredRepo