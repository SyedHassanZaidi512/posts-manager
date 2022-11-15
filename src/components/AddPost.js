import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState,useEffect } from "react";

function AddPost({addForm,setAddForm,submitAddForm}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
  setTitle("")
  setBody("")
  }, [addForm])
  

  return (
    <div>
      <Dialog open={addForm} >
        <DialogTitle>Add Post</DialogTitle>
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
          <Button onClick={() => setAddForm(false)}>Cancel</Button>
          <Button onClick={()=>submitAddForm(title,body)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddPost;
