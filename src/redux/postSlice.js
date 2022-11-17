import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: false,
  favouritePosts: "",
  postToEdit:"",
  open: false,
  postDetails:false,
  showDetails:""
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    getPostsData: (state, action) => {
      state.posts = action.payload;
    },
    openAddForm: (state, action) => {
      state.open = true;
      state.postToEdit = action.payload;
    },
    closeAddForm: (state, action) => {
      state.postToEdit = null;
      state.open = false;
    },
    addPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    addToFavourite: (state, action) => {
      state.favouritePosts = [...state.favouritePosts, action.payload];
    },
    removeFromFavourite:(state,action)=>{
      state.favouritePosts=action.payload;
    },
    editPost:(state,action) => {
       state.posts=action.payload.newArray   ;
       state.favouritePosts= action.payload.editFavouriteList;
    },
    showPostDetails:(state,action) => {
       state.showDetails=true;
       state.postDetails=action.payload;
    },
    hideDetails:(state,action) => {
      state.showDetails=false;
    }
  },
});

export const {
  getPostsData,
  addToFavourite,
  addPosts,
  openAddForm,
  closeAddForm,
  editPost,
  showPostDetails,
  hideDetails,
  removeFromFavourite
} = postSlice.actions;
export default postSlice.reducer;
