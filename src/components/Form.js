import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeAddForm, addPosts, editPost } from "../redux/postSlice";
function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const open = useSelector((state) => state.post.open);
  const posts = useSelector((state) => state.post.posts);
  const favouriteList = useSelector((state) => state.post.favouritePosts);
  const post = useSelector((state) => state.post.postToEdit);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [post]);

  const submitForm = (title, body) => {
    if (post) {  // to Edit post
      const newArray = posts.map((element) => {
        if (element.id === post.id) {
          return { ...element, title: title, body: body };
        } else {
          return element;
        }
      });
      const editFavouriteList = favouriteList.map((element) => {
        if (element.id === post.id) {
          return { ...element, title: title, body: body };
        } else {
          return element;
        }
      });
      dispatch(editPost({ newArray, editFavouriteList }));
      setTitle("");
      setBody("");
      dispatch(closeAddForm());
    } else {   // to add Post
      const newPost = { id: posts.length + 1, title: title, body: body };
      dispatch(addPosts(newPost));
      setTitle("");
      setBody("");
      dispatch(closeAddForm());
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{post ? "Edit Psot" : "Add Post"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Body"
            type="text"
            fullWidth
            variant="standard"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeAddForm())}>Cancel</Button>
          <Button onClick={() => submitForm(title, body)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form;
