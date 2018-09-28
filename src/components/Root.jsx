import React, { Component } from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import HydrateUserPage from "../containers/HydrateUserPage"
import HydrateRepoPage from "../containers/HydrateRepoPage"
import HydrateExplore from "../containers/HydrateExplore";

class Root extends Component {
  render() {
    const { store } = this.props
    return ( 
      <Provider store={store}>
        <div className="Root">
          <Route path={"/"} component={HydrateExplore}/>
          <Route exact path={"/:login"} component={HydrateUserPage}/>
          <Route exact path={"/:login/:repo"} component={HydrateRepoPage}/>
        </div>
      </Provider>        
    )
  }
}

export default Root