import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Form({id,open,setOpen,submitForm,heading,title,setTitle,body,setBody}) {
  return (
    <div>
        <Dialog key={open} open={open}>
        <DialogTitle>{heading}</DialogTitle>
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => submitForm(title, body,id)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Form