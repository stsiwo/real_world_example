import { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.setState({ searchInput: e.target.value }) 
  }
  render() { 
    return (  
      <Fragment>
        <SearchText 
          searchInput={this.state.searchInput} 
          handleInput={this.handleInput} 
        />
        <SearchBtn 
          searchInput={this.state.searchInput}
        />
      </Fragment>
    )
  }
}
 
export default Form