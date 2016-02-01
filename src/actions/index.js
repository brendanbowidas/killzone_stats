import axios from 'axios';


 const ROOT_URL = "http://killzone4.online.scee.com/api/profile/get-competitive/";
 const CLAN_URL = "http://killzone4.online.scee.com/api/clan/get-clan-for-user/";
 export const FETCH_DATA = 'FETCH_DATA';
 export const SET_NAME = 'SET_NAME';
 export const FETCH_CLAN = 'FETCH_CLAN';
 export const REMOVE_PLAYER = 'REMOVE_PLAYER';




export function fetchData(player) {
  const url = ROOT_URL + player;
  const request = axios.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  };

};

export function fetchClan(player) {
  const url = CLAN_URL + player;
  const request = axios.get(url);

  return {
    type: FETCH_CLAN,
    payload: request
  }
}

var incrementalId = 0;

export function setName(name) {
  incrementalId++
  return {
    type: SET_NAME,
    id: incrementalId,
    name: name

  }
}

export function removePlayer(index) {
  return {
    type: REMOVE_PLAYER,
    index: index
  }
}
