import React, { Component } from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Explore from "./Explore"
import HydrateUserPage from "../containers/HydrateUserPage"

class Root extends Component {
  render() {
    const { store } = this.props
    return ( 
      <Provider store={store}>
        <div className="Root">
          <Route path={"/"} component={Explore}/>
          <Route path={"/:login"} component={HydrateUserPage}/>
        </div>
      </Provider>        
    )
  }
}

export default Root;