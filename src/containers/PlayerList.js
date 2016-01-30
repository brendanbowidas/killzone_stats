import React, { Component } from 'react';
import { connect } from 'react-redux';

 class PlayerList extends Component {
  constructor(props) {
    super(props);
  }
   componentDidUpdate() {
     console.log(this.props.players);
   }
  _renderPlayer(playerData) {

  }

  render() {

    return(
      <div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    players: state.players,
    player: state.player,
  }
}

export default connect(mapStateToProps)(PlayerList);
