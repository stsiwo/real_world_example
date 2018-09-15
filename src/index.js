import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/Root"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import configureStore from "./store/storeConfig.js"

const store = configureStore()

ReactDOM.render(
  <Router>
    <Root store={store}/>
  </Router> 
  , document.getElementById("root"))
  
registerServiceWorker()
