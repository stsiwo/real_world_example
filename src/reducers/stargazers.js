import { getStargazersRequestData } from "../thunks/REQUEST_DATA"
import union from "loadsh/union"

const eachStargazer = (state = {
  items: [],
  isFetching: false,
  nextPageUrl: "",
  pageCount: 0
}, action) => {
  const stargazersRequestData = getStargazersRequestData()
  
  switch(action.type) {
    case stargazersRequestData.REQUEST:
      return {
        ...state,
        isFetching: true
      } 
    case stargazersRequestData.SUCCESS:
      return {
        ...state,
        items: union(state.items, action.data),
        isFetching: false,
        nextPageUrl: action.data.nextPageUrl,
        pageCount: state.pageCount++
      }  
    case stargazersRequestData.FAIL:
      return {
        ...state,
        isFetching: false
      }
    }
}
export default eachStargazer
