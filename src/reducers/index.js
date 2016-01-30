
import { combineReducers } from 'redux';
import PlayersReducer from './reducer_players';

const rootReducer = combineReducers({
  players: PlayersReducer,

});

export default rootReducer;
