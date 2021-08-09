import { call, put, takeEvery } from "redux-saga/effects";

import { GET_MARS_ROVER_IMAGES } from "./constants";
import { fetchRoverImages } from "../../utils/requests";
import { receiveRoverImages } from "./actions";

export function* getRoverImages(payload) {
  const response = yield call(fetchRoverImages, payload.data);
  if (response.status !== 200) {
    console.log("Something went wrong!");
  } else {
    let images = response.images;
    yield put(receiveRoverImages(images));
  }
}

export default function* gallerySaga() {
  yield takeEvery(GET_MARS_ROVER_IMAGES, getRoverImages);
}
