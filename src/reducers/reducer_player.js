import { SET_NAME } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
}
