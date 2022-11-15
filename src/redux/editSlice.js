import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editedPost: "",
};

const editSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    editData: (state, action) => {
      state.editedPost = action.payload;
    },
  },
});

export const { editData } = editSlice.actions;
export default editSlice.reducer;
