import { FETCH_DATA, SET_NAME, REMOVE_PLAYER, FETCH_CLAN } from '../actions/index';


 function player(state, action) {
  switch(action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        id: action.id,
        name: action.name

      });



    default:
      return state;
  }
}


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_DATA:
      return [
        {
          name: '',
          stats: action.payload.data
        },
        ...state

        ];

        case FETCH_CLAN:
          return []

      case SET_NAME:
        return state.map(n => {
          if(n.name === ''){
        return player(n, action);
      } else return n
        });

        case REMOVE_PLAYER:
          return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
          ];

  }
  return state;
}
