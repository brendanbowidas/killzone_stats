import { FETCH_DATA, SET_NAME, REMOVE_PLAYER, FETCH_CLAN, ADD_FAVORITE } from '../actions/index';




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



export default function(state = { players: [], favorites: [] }, action) {
  switch(action.type) {
    case FETCH_DATA:
      console.log(action.meta.name)
      return Object.assign({}, state, {
        players: [
          {
            id: action.meta.id,
            name: action.meta.name,
            stats: action.payload.data
          },
          ...state.players
        ]
      })

        case FETCH_CLAN:
          return []

      case SET_NAME:

         state.players.map(n => {
          if(n.name === '') {
            return players(n, action);
          } else return n;
        })

        case REMOVE_PLAYER:
          return Object.assign({}, state, {
            players: [
              ...state.players.slice(0, action.index),
              ...state.players.slice(action.index + 1)
            ]
          })

        case ADD_FAVORITE:
          return Object.assign({}, state, {
            favorites: [
              action.player,
              ...state.favorites
            ]
          })

  }
  return state;
}
