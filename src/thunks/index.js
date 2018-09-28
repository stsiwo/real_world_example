import { 
  getUserRequestData,
  getStarredRepoRequestData,
  getRepoRequestData,
  getStargazersRequestData,
  getLoadMoreStarredRepoRequestData,
  getLoadMoreStargazersRequestData,
  isNeedFetch
} from "./REQUEST_DATA"
import representativeAction from "../actions"
import  camelize  from "camelize"
import { normalize } from "normalizr"

const prepareRequestData = (input, state, requestFunc) => {
  return requestFunc(input, state) 
}

export const loadUserPageThunk = (login) => (dispatch, getState) => {
  loadData(dispatch, prepareRequestData(login, getState(), getUserRequestData))
  loadData(dispatch, prepareRequestData(login, getState(), getStarredRepoRequestData))
}

export const loadStarredRepoMoreThunk = (login) => (dispatch, getState) => {
  loadData(dispatch, prepareRequestData(login, getState(), getLoadMoreStarredRepoRequestData))
}

export const loadRepoPageThunk = (loginRepo) => (dispatch, getState) => {
  loadData(dispatch, prepareRequestData(loginRepo, getState(), getRepoRequestData))
  loadData(dispatch, prepareRequestData(loginRepo, getState(), getStargazersRequestData))
}

export const loadStargazersMoreThunk = (loginRepo) => (dispatch, getState) => {
  loadData(dispatch, prepareRequestData(loginRepo, getState(), getLoadMoreStargazersRequestData))
}

const getNextPageUrl = (response) => {
  
  const link = response.headers.get("link")
  
  if (!link) return null
  
  const regex = /\<(.*)(api.github.com\/)(.*)\>(?=(.*)(next))/ 
  return link.match(regex)[3]

}

const loadData = (dispatch, data) => {
  
  if (!isNeedFetch(data)) return null

  const { endpoint, type, schema, input } = data
  const { REQUEST, SUCCESS, FAIL } = type
  const fullUrl = `https://api.github.com/${endpoint}`

  dispatch(representativeAction(REQUEST, {}, input))
  
  fetch(fullUrl)
    .then( response => {
      response.json().then(json => {
        if (!response.ok) return Promise.reject(json)

        // get nextPageUrl from header link tag 
        const nextPageUrl = getNextPageUrl(response)        
        // camelize json
        const camelizedJson = camelize(json)
        return Object.assign({}, normalize(camelizedJson, schema), {
          nextPageUrl: nextPageUrl
        })
      })
        .then(json => {
          return dispatch(representativeAction(SUCCESS, json, input))
        }, error => {
          return dispatch(representativeAction(FAIL, { error: error.message || "Something bad happened" }, input))
        })
    }, (reason) => {
      console.log("something's wrong with network")
      console.log(reason)
    })
}