import {
    GET_MARS_ROVER_IMAGES,
    RECEIVE_MARS_ROVER_IMAGES,

} from './constants';


export function getRoverImages(data) {
    return {
        type : GET_MARS_ROVER_IMAGES,
        data
    }
}

export function receiveRoverImages(data) {
    return {
        type : RECEIVE_MARS_ROVER_IMAGES,
         data
    }
}

