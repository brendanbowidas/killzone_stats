import React, { Component } from 'react';
import _ from 'lodash';
import numeral from 'numeral';

export default (props) => {
  return (
    <div className="row playerList">
        <div className="card player-card col-xs-12 col-md-8 col-md-offset-2">
          <i className="close" onClick={(e) => props.remove(props.index)}>X</i>
          <i className="favorite" onClick={(e) => props.favorite(props.index)}>Favorite</i>

            <h4>{props.name}</h4>
            <div className="col-xs-12 col-sm-4 img-container">
                <img className="img-responsive pull-left" src={props.stats.PlayerCardIcon}/>
            </div>
            <ul className="list-unstyled col-md-8">
              <div className="li-wrap col-md-12 col-sm-8">
               {//<li>Clan: </li>
               }
                <li>Games Played: {props.stats.GamesPlayed} </li>
                <li>K/D: {_.round((props.stats.Kills / props.stats.Deaths), 2)} </li>

                <li>W/L: {_.round((props.stats.GameWins / props.stats.GameLosses), 2)}  </li>
                <li>Headshot %: {_.round(( 100 * props.stats.HeadShots / props.stats.Kills), 2)} </li>
               <li>Kills per minute: <span>{_.round((props.stats.Kills / (props.stats.TimePlayed / 60)), 2)}</span> </li>
                <li>Mission W/L ratio: {_.round((props.stats.MissionWins / props.stats.MissionLosses), 2)} </li>
                <li>Total mission points: { numeral(props.stats.MissionPoints).format()} </li>

                 <li id="beast">BEAST RATING:
                        { numeral(_.round(((props.stats.MissionPoints / props.stats.GamesPlayed) * (props.stats.Kills / props.stats.Deaths )))).format()}
                    </li>
                </div>
            </ul>
          </div>
        </div>


  )
}
