import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="main-slider-card">
      {/* <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </Card> */}

      <Link to="/home">
        <Card
          sx={{
            width: 180,
            backgroundColor: "white",
            height: 250,
            border: "1px gray solid",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography variant="h6" component="div">
              New Document
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <IconButton aria-label="more options">
              <MoreVertIcon />
            </IconButton>
          </CardActions>
        </Card>{" "}
      </Link>
    </div>
  );
};

export default Cards;
