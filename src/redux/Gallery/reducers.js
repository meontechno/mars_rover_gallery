
import produce from 'immer';
import {
    RECEIVE_MARS_ROVER_IMAGES,
} from './constants';

export const initialState = {
    roverImages:[]
}

const galleryReducer = produce((draft, action) => {
    switch(action.type) {
        case RECEIVE_MARS_ROVER_IMAGES:
            draft.roverImages = action.data
            return draft;     
        default:
            return draft;
    }
}, initialState)


export default galleryReducer;
