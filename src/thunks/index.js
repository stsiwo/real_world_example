import { 
  getUserRequestData,
  getStarredRepoRequestData,
  getRepoRequestData,
  getStargazersRequestData
} from "./REQUEST_DATA"
import representativeAction from "../actions"
import { camelize } from "camelize"
import { normalize } from "normalizer"

export const loadUserPageThunk = (login) => (dispatch, getState) => {

  const userReqData = getUserRequestData(login, getState) 
  loadData(dispatch, userReqData)

  const starredRepoReqData = getStarredRepoRequestData(login, getState)
  loadData(dispatch, starredRepoReqData)
}

export const loadStarredRepoMoreThunk = (login) => (dispatch, getState) => {
  let starredRepoReqData = getStarredRepoRequestData(login, getState) 
  starredRepoReqData.endpoint = getState().paginate.starredRepo[login].nextPageUrl
  loadData(dispatch, starredRepoReqData)
}

export const loadRepoPageThunk = (login) => (dispatch, getState) => {

  const repoReqData = getRepoRequestData(login, getState) 
  loadData(dispatch, repoReqData)

  const stargazersReqData = getStargazersRequestData(login, getState)
  loadData(dispatch, stargazersReqData)
}

export const loadStargazersMoreThunk = (login) => (dispatch, getState) => {
  let stargazersReqData = getStargazersRequestData(login, getState) 
  stargazersReqData.endpoint = getState().paginate.stargazers[login].nextPageUrl
  loadData(dispatch, stargazersReqData)
}

const loadData = (dispatch, data) => {
  
  if (data.state) return null

  const { endpoint, type, schema } = data
  const { request, success, fail } = type
  const fullUrl = `https://api.github.com/${endpoint}`

  dispatch(representativeAction(request))
  
  fetch(fullUrl)
    .then( response => {
      response.json().then(json => {
        if (!response.ok) return Promise.reject(json)

        // get nextPageUrl from header link tag 
        const link = response.headers.get("link")
        const nextPageUrl = link.match("/\<(.*?)\>(?=(.*)(next))/")
        
        // camelize json
        const camelizedJson = camelize(json)

        return Object.assign({}, normalize(camelizedJson, schema), {
          nextPageUrl: nextPageUrl
        })
      })
    }, (reason) => {
      console.log("something's wrong with network")
      console.log(reason)
    })
    .then( json => {
      return dispatch(representativeAction(success, json))
    }, error => {
      return dispatch(representativeAction(fail, {error: error.message || "Something bad happened"}))
    })
}