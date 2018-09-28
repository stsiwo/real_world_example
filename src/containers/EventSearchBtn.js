import { connect } from "react-redux"
import SearchBtnWithRouter from "../components/SearchBtn"
import { resetErrorMessageThunk } from "../thunks/reset"


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetErrorMessage: () => dispatch(resetErrorMessageThunk())
  }
}
const EventSearchBtn = connect (
  null,
  mapDispatchToProps
)(SearchBtnWithRouter)

export default EventSearchBtn


