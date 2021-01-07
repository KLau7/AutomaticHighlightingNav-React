import { PUSH_HASH } from './actionTypes';

export const pushHash = ( hash ) => ({
    type: PUSH_HASH,
    payload: { hash }
});