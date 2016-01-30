import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard';

 class PlayerList extends Component {
  constructor(props) {
    super(props);
  }
   componentDidUpdate() {

   }
  _renderPlayer(playerData) {
    console.log(playerData);
    return (
      <PlayerCard key={playerData.name} name={playerData.name} stats={playerData.stats} />
    )
  }

  render() {

    return(
      <div>
        <ul>
          {this.props.players.map(this._renderPlayer)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    players: state.players,

  }
}

export default connect(mapStateToProps)(PlayerList);
