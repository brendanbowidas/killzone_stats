import { FETCH_DATA, SET_NAME } from '../actions/index';


 function player(state, action) {
  switch(action.type) {
    case SET_NAME:
      return Object.assign({}, state, {

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

      case SET_NAME:
        return state.map(n => {
          console.log( 'n name: ' + n.name + "  " + "action name:" + action.name)
          if(n.name === ''){
        return player(n, action);
      } else return n
        });

  }
  return state;
}
