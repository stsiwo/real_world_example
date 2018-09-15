import { Component } from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Explore from "./Explore"
import HydrateUserPage from "../containers/HydrateUserPage"

class Root extends Component {
  render() {
    return ( 
      <Provider>
        <Route path={"./"} component={Explore}></Route>
        <Route path={"./:login"} component={HydrateUserPage}></Route>
      </Provider>        
    )
  }
}

export default Root;