import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import Root from "./components/Root"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter as Router } from "react-router-dom" 
import configureStore from "./store/storeConfig.js"
import JssProvider from "react-jss/lib/JssProvider"
import { create } from "jss"
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// to override default material-ui styles with css modules style
const generateClassName = createGenerateClassName()
const jss = create(jssPreset())
jss.options.insertionPoint = "insertion-point-jss"

const store = configureStore()

class App extends Component {
  render() { 
    return ( 
      <Fragment>
        {/* normalize browser's default styles */}
        < CssBaseline />
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Router>
            <Root store={store} />
          </Router>
        </JssProvider>
      </Fragment>
    )
  }
}
 
ReactDOM.render(<App/>, document.getElementById("root"))
  
registerServiceWorker()
