import React, { Component } from "react"
import ReactDOM from "react-dom"
import Root from "./components/Root"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter as Router } from "react-router-dom" 
import configureStore from "./store/storeConfig.js"

const store = configureStore()

class App extends Component {
  render() { 
    return ( 
      <Router>
        <Root store={store} />
      </Router> 
    )
  }
}
 
ReactDOM.render(<App/>, document.getElementById("root"))
  
registerServiceWorker()
