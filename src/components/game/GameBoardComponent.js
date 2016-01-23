'use strict';

import React from 'react';

require('styles/game/GameBoard.scss');

class GameBoardComponent extends React.Component {
  render() {
  	let squares = this.props.squares;
    return (
      <div className="gameboard-component">
        <ul className="gameboard">
        	{squares.map((square,n) => {
        		let classes = 'gameboard__square '+square;
        		return (
        			<li className={classes} key={n}></li>
        		);
      		})}
        </ul>
      </div>
    );
  }
}

GameBoardComponent.displayName = 'GameGameBoardComponent';

// Uncomment properties you need
// GameBoardComponent.propTypes = {};
// GameBoardComponent.defaultProps = {};

export default GameBoardComponent;
