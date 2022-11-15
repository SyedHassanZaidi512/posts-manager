import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import "../App";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AddList({ add, editPost }) {
  return (
    <div className="postsList">
      {add &&
        add.length > 0 &&
        add.map((post) => (
          <Box
            key={post.id}
            sx={{
              width: "25%",
              padding: "2%",
            }}
          >
            <Card>
              <Item sx={{ fontWeight: "bold" }}>
                <Typography padding="2px" fontWeight="bold">
                  {post.title}
                </Typography>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    width: "10px",
                    height: "30px",
                    fontSize: "12px",
                    backgroundColor: "blue",
                  }}
                  onClick={() => editPost(post, post.id)}
                >
                  Edit
                </Button>
              </Item>
            </Card>
          </Box>
        ))}
    </div>
  );
}

export default AddList;
