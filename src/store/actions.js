import { PUSH_HASH, PUSH_PATH, SET_SECTIONS_NAMES } from './actionTypes';

export const pushHash = ( hash ) => ({
    type: PUSH_HASH,
    payload: { hash }
});

export const pushPath = ( path ) => ({
    type: PUSH_PATH,
    payload: { path }
})

export const setSectionNames = ( sectionNames ) => ({
    type: SET_SECTIONS_NAMES,
    payload: { sectionNames }
})