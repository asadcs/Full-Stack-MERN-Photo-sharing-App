import { ActionTypes } from "./ActionTypes";
import * as api from "../api/index.js";

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  };
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: ActionTypes.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts();
//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
