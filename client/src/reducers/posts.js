const initialState = {
  post: [{ id: 1, title: "Asad", category: "programmer" }],
};
//const initialState = 1;
export default (posts = [1], action) => {
  switch (action.type) {
    case "SET_POSTS":
      // return console.log(action.payload);
      // [...posts, action.payload]
      return [...posts, action.payload];
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
