import { RECEIVE_ALL_GAMES, RECEIVE_GAME } from '../actions/games_actions';
import merge from 'lodash/merge'

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_GAMES:
            return action.games
        case RECEIVE_GAME:
            let nextState = merge({}, state);
            return merge(nextState, { [action.game.id]: action.game });
        default:
            return state;
    }
}

export default gamesReducer;