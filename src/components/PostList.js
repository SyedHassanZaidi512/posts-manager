import "../App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

function PostList({ posts, handleClick, addFunc }) {
  return (
    <div className="postsList">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              width: "25%",
              padding: "2%",
            }}
          >
            <Card>
              <Item sx={{ fontWeight: "bold" }}>
                <Typography
                  padding="2px"
                  onClick={() => handleClick(post.id)}
                  fontWeight="bold"
                >
                  {post ? post.title : ""}
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
                  onClick={() => addFunc(post, post.id)}
                >
                  Add
                </Button>
              </Item>
            </Card>
          </Box>
        ))}
    </div>
  );
}

export default PostList;
