import React from "react";
import "./Signin.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { FcDocument } from "react-icons/fc";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Cards from "../Card/Card";

const Signinpage = () => {
  return (
    <div>
      <div className="topheader-signin">
        <div className="logo-signin">
          <RxHamburgerMenu style={{ fontSize: "1.6rem" }} />
          <FcDocument style={{ fontSize: "3.2rem", fill: "#2684fcc4" }} />
          <h1>Docs</h1>
        </div>
        <div className="searchbar">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 900,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, width: "10rem" }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
        </div>
        <div className="profilepic">
          <TbGridDots style={{ fontSize: "1.6rem" }} />
          <Avatar alt="Aindy Baker" src="/static/images/avatar/3.jpg" />
        </div>
      </div>
      <div className="main-slider-container">
        <div className="slider">
          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "auto",
              width: "80vw",
            }}
          >
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="recent-document">
        <div className="recent-doc-heading">
          <h1>Recent Documents</h1>
         
        </div>
        <div className="docs-card">
          <div className="slider">
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "auto",
                width: "80vw",
              }}
            >
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
          <div className="slider">
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "auto",
                width: "80vw",
              }}
            >
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
          <div className="slider">
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "auto",
                width: "80vw",
              }}
            >
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
