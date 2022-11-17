import "../App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import PostDetail from "./PostDetail";
import Form from "./Form";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addToFavourite, showPostDetails } from "../redux/postSlice";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: "6rem",
  color: theme.palette.text.secondary,
}));

function PostList() {
  const dispatch = useDispatch();
  const [checkList, setCheckList] = useState("");
  const posts = useSelector((state) => state.post.posts);
  const favouritePosts = useSelector((state) => state.post.favouritePosts);

  useEffect(() => {
    filterIds();
  }, [favouritePosts]);

  const filterIds = () => {
    const postIds =
      favouritePosts &&
      favouritePosts.length > 0 &&
      favouritePosts.map((element) => {
        return element.id;
      });
    setCheckList(postIds);
  };

  const showDetail = (id) => {
    const filterPost = posts.filter((element) => {
      return element.id === id;
    });
    dispatch(showPostDetails(filterPost[0]));
  };

  return (
    <div>
     <Form />
     <PostDetail />
    <div className="postsList"> 
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Box
            key={post.id}
            sx={{
              width: "25%",
              padding: "2%",
              cursor: "pointer",
            }}
          >
            <Box>
            <Tooltip title="view details">
              <Item
                sx={{ fontWeight: "bold" }}
                onClick={() => showDetail(post.id)}
              >
                <Typography
                  height="50%"
                  width="90%"
                  padding="2%"
                  fontWeight="bold"
                  overflow="hidden !important"
                  textOverflow="ellipsis"
                >
                  {post ? post.title : ""}
                </Typography>
                <Divider />
              </Item>
              </Tooltip>
              <Tooltip title="Add to favourite">
              <Button
                disabled={checkList && checkList.includes(post.id)}
                type="button"
                variant="contained"
                sx={{
                  width: "5vw",
                  position: "relative",
                  bottom: "2.2rem",
                  left: "10vw",
                  height: "1.5 vw",
                  fontSize: "60%",
                  backgroundColor: "blue",
                  marginTop: "2px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() =>dispatch(addToFavourite(post))}
              >
                {checkList && checkList.includes(post.id)? "Added" : "favourite"}
              </Button> 
              </Tooltip>

            </Box>
          </Box>
        ))}
    </div>
    </div>
  );
}

export default PostList;
