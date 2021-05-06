import { CONSTANTS } from "../actions";

const initialState = {
  boardsList: {}
};

const boardsListReducers = (state = initialState, action) => {
    switch (action.type) {
        //get boardslist
        case CONSTANTS.GET_BOARDSLIST:{
            console.log("GET_BOARDSLIST in boardsListReducers.js")
            console.log(action.payload)
            return {
                ...state,
                boardsList: action.payload
            };
          }
        //add a board
        case CONSTANTS.ADD_BOARD: {
            return {...state, boardsList: Object.assign({}, state.boardsList, action.payload['newBoard'])};
        }

        default:
            return state;
    }
  };

  export default boardsListReducers;
