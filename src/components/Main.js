require('normalize.css');
require('styles/App.css');

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameBoard from './game/GameBoardComponent.js';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
	componentWillMount() {

		let unpackedData = this.unpackData();
		this.props.actions.storeUnpackedData(unpackedData);
		this.props.actions.selectGame(0);
	}
	unpackData() {
		let unpacked = [];

		function pad(input, length=25) {
			let num_zeros = length - input.length,
				padding = '';

			while (num_zeros > 0) {
				padding += '0';
				num_zeros--;
			}

			return padding + input;
		}

		for (var game of gameData) {
			let squares = [],
				blues = pad(game.blue.toString(2)),
				reds = pad(game.red.toString(2)),
				num_reds = 0,
				num_blues = 0,
				red,
				blue;

			for (var i = 0; i < 25; i++) {
				red = reds.charAt(i);
				blue = blues.charAt(i);

				if (red === '1') {
					if (blue === '0') {
						squares.push('R');
						num_reds++;
					} else {
						squares.push('A');
					}
				} else {
					if (blue === '1') {
						squares.push('B');
						num_blues++;
					} else {
						squares.push('N');
					}
				}
			}

			unpacked.push({
				squares,
				redFirst: num_reds > num_blues
			});
		}

		return unpacked;
	}
  render() {
  	let squares = this.props.squares
    return (
      <div className="index">
        <GameBoard squares={squares} />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};
function mapStateToProps(state) {
	let squares = state.game.currentGame !== -1 ? state.data.games[state.game.currentGame].squares : [];
  return {
  	squares
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    storeUnpackedData: require('../actions/data/storeUnpackedData.js'),
    selectGame: require('../actions/game/selectGame.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

const gameData = [{	
	blue: 12109831,
	red: 17630120
},
{
	blue: 14352068,
	red: 17349651
},
{
	blue: 25728304,
	red: 7488728
},
{
	blue: 17540418,
	red: 3173009
},
{
	blue: 6072061,
	red: 18039054
},
{
	blue: 19421283,
	red: 5613052
},
{
	blue: 6347424,
	red: 12189771
},
{
	blue: 21716382,
	red: 12878101
},
{
	blue: 18680085,
	red: 9459298
},
{
	blue: 10751149,
	red: 21149310
},
{
	blue: 22033586,
	red: 9651848
},
{
	blue: 17142661,
	red: 5786276
},
{
	blue: 2788500,
	red: 26608482
},
{
	blue: 860536,
	red: 31509766
},
{
	blue: 21108640,
	red: 13966607
},
{
	blue: 31464880,
	red: 8902659
},
{
	blue: 10994048,
	red: 21764257
},
{
	blue: 30047501,
	red: 6644188
},
{
	blue: 6442472,
	red: 18162825
},
{
	blue: 231065,
	red: 4993504
},
{
	blue: 4657320,
	red: 8444625
},
{
	blue: 26359042,
	red: 870709
},
{
	blue: 8476051,
	red: 19705928
},
{
	blue: 6307824,
	red: 25988361
},
{
	blue: 18081922,
	red: 14962092
},
{
	blue: 2605705,
	red: 20984544
},
{
	blue: 9142684,
	red: 14702781
},
{
	blue: 1906250,
	red: 27277697
},
{
	blue: 11606169,
	red: 4833182
},
{
	blue: 1225753,
	red: 26167456
},
{
	blue: 2212312,
	red: 6196386
},
{
	blue: 4886216,
	red: 11577507
},
{
	blue: 5948558,
	red: 20191016
},
{
	blue: 10030213,
	red: 4906942
},
{
	blue: 9444442,
	red: 4829181
},
{
	blue: 30277054,
	red: 16903181
},
{
	blue: 8693545,
	red: 6112572
},
{
	blue: 10110246,
	red: 16826048
},
{
	blue: 5378638,
	red: 19710025
},
{
blue: 1710916,
red: 31466677
}];
