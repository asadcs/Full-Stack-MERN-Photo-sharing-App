import { combineReducers } from "redux";
import posts from "./posts";

const reducers = combineReducers({ posts: posts });
//https://github.com/adrianhajdin/project_mern_memories
export default reducers;
