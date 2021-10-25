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
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: ActionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: ActionTypes.UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: ActionTypes.DELETE, payload: id });
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
