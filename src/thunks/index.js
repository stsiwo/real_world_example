import { 
  getUserRequestData,
  getStarredRepoRequestData,
  getRepoRequestData,
  getStargazersRequestData
} from "./REQUEST_DATA"
import representativeAction from "../actions"

export const loadUserPageThunk = (login) => (dispatch, getState) => {

  const userReqData = getUserRequestData(login, getState) 
  loadData(dispatch, userReqData)

  const starredRepoReqData = getStarredRepoRequestData(login, getState)
  loadData(dispatch, starredRepoReqData)
}

const loadData = (dispatch, data) => {
  
  if (data.state) return null

  const { endpoint, type } = data
  const { request, success, fail } = type
  const fullUrl = `https://api.github.com/${endpoint}`

  dispatch(representativeAction(request))
  
  fetch(fullUrl)
    .then( response => {
      return response.json()
    })  
    .then( json => {
      if (!response.ok) return Promise.reject(json)

    })
}