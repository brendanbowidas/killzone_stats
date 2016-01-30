import axios from 'axios';


 const ROOT_URL = "http://killzone4.online.scee.com/api/profile/get-competitive/";
 export const FETCH_DATA = 'FETCH_DATA';
 export const SET_NAME = 'SET_NAME';

 var initialID = 0;

export function fetchData(player) {
  const url = ROOT_URL + player;
  const request = axios.get(url);

  return {
    type: FETCH_DATA,
    payload: request
  };

};

export function setName(name) {
  console.log(name)
  return {
    type: SET_NAME,
    name: name

  }
}
