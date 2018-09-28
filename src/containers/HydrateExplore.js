import { connect } from "react-redux"
import Explore from "../components/Explore"
import  representativeAction  from "../actions";
import { RESET_ERROR_MESSAGE } from "../actions/type";

const mapStateToProps = (state, ownProps) => {
  
  return {
    errorMessage: state.errorMessage
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetErrorMessage: () => dispatch(representativeAction(RESET_ERROR_MESSAGE))
  }
}
const HydrateExplore = connect (
  mapStateToProps,
  mapDispatchToProps
)(Explore)

export default HydrateExplore

