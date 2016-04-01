import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard';
import { removePlayer, addFavorite } from '../actions/index';
import { bindActionCreators } from 'redux';

 class PlayerList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="player-container container ">
        <ul>
          {this.props.players.map((player, index) => {
            return (

              <PlayerCard key={player.id} name={player.name} stats={player.stats}
               index={index} remove={this.props.removePlayer} favorite={this.props.addFavorite} />
           );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    players: state.players,
    favorites: state.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removePlayer, addFavorite }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
