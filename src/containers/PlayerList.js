import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerCard from '../components/PlayerCard';
import { removePlayer } from '../actions/index';
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
               index={index} remove={this.props.removePlayer} />
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

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePlayer}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
