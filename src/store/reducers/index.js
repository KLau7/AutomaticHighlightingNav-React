import { PUSH_HASH } from '../actionTypes';

export default function navReducer(state = { hash: '#first' }, action) {
    switch (action.type) {
      case PUSH_HASH:
        return action.payload.hash;
      default:
        return state;
    }
}