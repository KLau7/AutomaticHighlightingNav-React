import { PUSH_HASH, PUSH_PATH, SET_SECTIONS_NAMES } from '../actionTypes';

const initialState = {
    hash: '#first',
    path: '/',
    sectionNames: ['#first']
}

export default function navReducer(state = initialState, action) {
    switch (action.type) {
      case PUSH_HASH:
        return action.payload.hash;
      case PUSH_PATH:
        return action.payload.path;
      case SET_SECTIONS_NAMES:
        return action.payload.sectionNames;
      default:
        return state;
    }
}