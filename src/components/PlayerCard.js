import React, { Component } from 'react';

export default (props) => {
  return (
    <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
            <div className="col-xs-6 img-container">
                <img className="img-responsive pull-left" src={props.stats.PlayerCardIcon}/>
            </div>
            <ul className="list-unstyled">
               <li>Clan: </li>
                <li>Games Played: {props.stats.GamesPlayed} </li>
                <li>K/D: </li>

                <li>W/L:  </li>
                <li>Headshot %: </li>
                <li>Kills per minute: </li>
                <li>Mission W/L ratio: </li><br/>
                <li>Total mission points: </li>

                 <li>BEAST RATING:</li>
            </ul>
          </div>
        </div>

  )
}
