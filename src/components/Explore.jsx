import { Component } from "react"

class Explore extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
      <Fragment>
        <Title/>
        <Form/>
        <ErrorMsg/>
      </Fragment>      
    )
  }
}

export default Explore
