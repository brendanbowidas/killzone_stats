import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import PlayerList from '../containers/PlayerList';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PlayerList />
      </div>
    );
  }
}
