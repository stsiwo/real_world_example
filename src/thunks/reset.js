import representativeAction from "../actions";
import { RESET_ERROR_MESSAGE } from "../actions/type";

export const resetErrorMessageThunk = () => (dispatch, getState) => {
  if (getState().errorMessage) dispatch(representativeAction(RESET_ERROR_MESSAGE))
}