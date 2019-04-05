import { combineReducers } from "redux";

const initialState = {
  currentModal: null,
  payload: null,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      const { modal, modalPayload } = action.payload;
      return {
        currentModal: modal,
        payload: modalPayload,
      };
    case "CLOSE_MODAL":
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  modal,
});
