import { getStarredRepoRequestData } from "../thunks/REQUEST_DATA"
import union from "lodash/union"

const eachStarredRepo = (state = {
  items: [],
  isFetching: false,
  nextPageUrl: "",
  pageCount: 0
}, action) => {
  const starredRepoRequestData = getStarredRepoRequestData()
  
  switch(action.type) {
    case starredRepoRequestData.REQUEST:
      return {
        ...state,
        isFetching: true
      } 
    case starredRepoRequestData.SUCCESS:
      return {
        ...state,
        items: union(state.items, action.data),
        isFetching: false,
        nextPageUrl: action.data.nextPageUrl,
        pageCount: state.pageCount++
      }  
    case starredRepoRequestData.FAIL:
      return {
        ...state,
        isFetching: false
      }
    }
}
export default eachStarredRepo