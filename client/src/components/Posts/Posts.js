import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <div>
      {/* Posts Collection
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post> */}
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
