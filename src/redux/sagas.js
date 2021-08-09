import { all } from 'redux-saga/effects';
import gallerySaga from './Gallery/sagas';

export default function* rootSaga() {
  yield all([gallerySaga()])
}
