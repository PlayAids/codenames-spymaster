/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  currentGame: -1,
  rotation: 0
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case 'SELECT_GAME': {
      nextState.currentGame = action.index;

      return nextState;
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
