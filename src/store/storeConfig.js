import { createStore, compose, applyMiddleware } from "redux"
import { thunk } from "thunk"
import rootReducer from "../reducers"

const configureStore = preState => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = [thunk]

  const store = createStore(
    rootReducer,
    preState,
    composeEnhancers(
      applyMiddleware(...middleware)
    ))
  return store
}

export default configureStore