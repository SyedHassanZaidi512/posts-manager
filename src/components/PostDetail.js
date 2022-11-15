import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PostDetail({ postDetail }) {
  const Data = postDetail[0];
  return (
    <div className="postDetail">
      <Card sx={{ maxWidth: 1000, marginTop: "20px" }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">Title:</Typography>
            <Typography marginBottom="1%">{Data.title}</Typography>
            <Typography variant="h5">Detail:</Typography>
            <Typography
              marginBottom="1%"
              variant="body2"
              color="text.secondary"
            >
              {Data.body}
            </Typography>
            <Typography variant="h5">Tags:</Typography>
            {Data.tags && Data.tags.length > 0 ? (
              Data.tags.map((tag) => (
                <Typography key={tag} size="small" color="primary">
                  #{tag}
                </Typography>
              ))
            ) : (
              <h5>no tags to show</h5>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default PostDetail;
