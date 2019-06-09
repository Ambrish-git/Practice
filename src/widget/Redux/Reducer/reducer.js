import * as actionType from '../helper/constants';

const defaultState={
    counter:0,
    data:[]
}
const counterReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_COUNTER:
      return newState ={...state,counter:state.counter+action.payload}  ;
   case actionType.RECEIVE_POSTS:
   return {...state,data:action.data}  ;
    default:
      return state
  }
}

export default counterReducer;