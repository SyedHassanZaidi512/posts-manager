import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { openAddForm, removeFromFavourite } from "../redux/postSlice";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  height: "10rem",
  color: theme.palette.text.secondary,
}));

const notifyCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "90px",
  height: "15rem",
  width: "100rem",
}));

function FavouriteList() {
  const dispatch = useDispatch();
  const favouriteList = useSelector((state) => state.post.favouritePosts);

  const removeFromFavourites = (id) => {
    const filterArray = favouriteList.filter((element) => {
      return element.id !== id;
    });
    dispatch(removeFromFavourite(filterArray));
  };

  if (!favouriteList || favouriteList.length < 0) {
    return (
      <notifyCard sx={{ fontWeight: "bold" }}>
        <Typography variant="h2">No post added</Typography>
      </notifyCard>
    );
  }

  return (
    <div>
    <Form />  
    <div className="postsList">
      {favouriteList &&
        favouriteList.length > 0 &&
        favouriteList.map((post) => (
          <Box
            key={post.id}
            sx={{
              width: "25vw",
              padding: "2%",
            }}
          >
            <Item sx={{ fontWeight: "bold" }}>
              <Box
                sx={{ float: "right", cursor: "pointer" }}
                onClick={() => removeFromFavourites(post.id)}
              >
                <CloseIcon />
              </Box>
              <Typography
                height="50%"
                width="90%"
                padding="2%"
                fontWeight="bold"
                overflow="hidden !important"
                textOverflow="ellipsis"
                display="inline-block"
              >
                {post.title}
              </Typography>
              <Divider />
              <Button
                type="button"
                variant="contained"
                sx={{
                  width: "10px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: "blue",
                }}
                onClick={() => dispatch(openAddForm(post, post.id))}
              >
                Edit
              </Button>
            </Item>
          </Box>
        ))}
    </div>
    </div>
  );
}

export default FavouriteList;
