import { combineReducers } from "redux";
import galleryReducer from "./Gallery/reducers";

export default () =>
  combineReducers({
    galleryReducer,
  });
