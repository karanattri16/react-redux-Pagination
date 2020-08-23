import { combineReducers } from "redux";
import postReducer from "./Post Reducer/postReducer";
import pageReducer from "./Page Reducer/pageReducer";
const rootReducer = combineReducers({
  post: postReducer,
  page: pageReducer,
});
export default rootReducer;
