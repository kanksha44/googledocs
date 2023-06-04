import React from "react";
import "./Signuppage.css";
import { FcDocument } from "react-icons/fc";
import Button from "@mui/material/Button";
import signuppic from "../../signuppic.png";
import { Link } from "react-router-dom";

const Signuppage = () => {
  return (
    <div>
      <div className="topheader-signup">
        <div className="logo-signup">
          <FcDocument />
          <span>
            <span>Google</span>Docs
          </span>
        </div>
        <div className="right-side-menu">
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Security</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="left-side-menu">
          <p>More Tools</p>

          <Button
            sx={{
              border: "1px gray solid",
              height: "3rem",
              color: "#1a73e8",
            }}
            className="share-btn"
            variant="outlined"
          >
            Go to Docs
          </Button>
          <Button
            sx={{
              backgroundColor: "#1a73e8",
              border: "none",
              height: "3rem",
              color: "white",
            }}
            className="share-btn"
            variant="outlined"
          >
            Try Docs for Work
          </Button>
        </div>
      </div>
      <div className="content-signup">
        <div className="text-signup">
          <h1>Build your best ideas together, in Google Docs</h1>
          <p>
            Create and collaborate on online documents in real-time and from any
            device.
          </p>
          <div className="signup-btns">
            <Button
              sx={{
                border: "1px gray solid",
                height: "3rem",
                color: "#1a73e8",
              }}
              className="share-btn"
              variant="outlined"
            >
              Go to Docs
            </Button>
            <Button
              sx={{
                backgroundColor: "#1a73e8",
                border: "none",
                height: "3rem",
                color: "white",
              }}
              className="share-btn"
              variant="outlined"
            >
              Try Docs for Work
            </Button>
          </div>

          <p>
            Dont have an account?{" "}
            <span>
              {" "}
              <Link to="/signin">Signup for free</Link>{" "}
            </span>
          </p>
        </div>
        <div className="pic-signup">
          <img src={signuppic} alt="signuppic" />
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
