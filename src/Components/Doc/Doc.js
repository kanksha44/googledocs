import React, { useState } from "react";
import "./Doc.css";
import { FcDocument } from "react-icons/fc";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { GrRedo } from "react-icons/gr";
import { GrUndo } from "react-icons/gr";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdSpellcheck } from "react-icons/md";
import { MdOutlineColorize } from "react-icons/md";
import { BiPaintRoll } from "react-icons/bi";
import { MdOutlineFormatBold } from "react-icons/md";
import { MdOutlineFormatItalic } from "react-icons/md";
import { MdFormatColorText } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { BiImageAlt } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { ImParagraphLeft } from "react-icons/im";
import { MdChecklistRtl } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { MdOutlineFormatIndentDecrease } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { BsCloudCheck } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { MdFormatClear } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



const Doc = () => {
  const [zoom, setZoom] = useState("");
  const [count, setcount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setZoom(event.target.value);
  };
  const handleIncrement = (event) => {
    setcount(count + 1);
  };
  const handleDecrement = (event) => {
    setcount(count - 1);
  };


 



  return (
    <div>
      <div className="topheader">
        <div className="logo">
          <FcDocument sx={{ fill: "#2684fcc4" }} />
        </div>
        <div className="menu">
          <div className="input-name">
            <input type="text" placeholder="Untitled document" />
            <FiStar />
            <MdDriveFileMoveOutline />
            <BsCloudCheck />
          </div>
          <div className="left-menu">
            <nav>
              <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Insert </li>
                <li>Format </li>
                <li>Tools </li>
                <li>Extension </li>
                <li>Help</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="logoutbtns">
          <GiBackwardTime />
          <BiMessageAltDetail />
          <BsCameraVideo />
          <Button
            sx={{
              borderRadius: "10rem",
              backgroundColor: "#c2e7ff",
              border: "none",
              height: "3rem",
              width: "37%",
              color: "black",
            }}
            className="share-btn"
            variant="outlined"
            startIcon={<AiOutlineLock />}
          >
            Share
          </Button>
          <Avatar alt="Aindy Baker" src="/static/images/avatar/3.jpg" />
        </div>
      </div>
      <div className="tools">
        <GrRedo />
        <GrUndo />
        <AiOutlinePrinter />
        <MdSpellcheck />
        <BiPaintRoll />

        <div className="zoomdropdown">
          <div
            className="formControlWrapper"
            style={{
              "&:hover": {
                borderBottom: "none",
              },
            }}
          >
            <FormControl
              variant="filled"
              size="small"
              sx={{
                m: 0,
                minWidth: 120,
                height: 70,
                outline: "none",
                "&:hover": {
                  borderBottom: "none",
                },
              }}
            >
              <InputLabel
                sx={{ alignItems: "center" }}
                id="demo-simple-select-filled-label"
              >
                100%
              </InputLabel>
              <Select
                sx={{
                  height: 55,
                  backgroundColor: "transparent",
                  "&:before": {
                    borderBottom: "none",
                  },

                  "&:hover:before": {
                    borderBottom: "none !important",
                  },
                }}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={zoom}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Fit</MenuItem>
                <MenuItem value={10}>50%</MenuItem>
                <MenuItem value={20}>75%</MenuItem>
                <MenuItem value={30}>90%</MenuItem>
                <MenuItem value={30}>100%</MenuItem>
                <MenuItem value={30}>125%</MenuItem>
                <MenuItem value={30}>150%</MenuItem>
                <MenuItem value={30}>200%</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="textstyle">
          <div
            className="formControlWrapper"
            style={{
              "&:hover": {
                borderBottom: "none",
              },
            }}
          >
            <FormControl
              variant="filled"
              size="small"
              sx={{
                m: 0,
                minWidth: 140,
                height: 70,
                outline: "none",
                "&:hover": {
                  borderBottom: "none",
                },
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Normal text
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChange}
                sx={{
                  height: 55,
                  backgroundColor: "transparent",
                  "&:before": {
                    borderBottom: "none",
                  },

                  "&:hover:before": {
                    borderBottom: "none !important",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Normal text</MenuItem>
                <MenuItem value={10}>Title</MenuItem>
                <MenuItem value={20}>subtitle</MenuItem>
                <MenuItem value={30}>Heading 1</MenuItem>
                <MenuItem value={30}>Heading 2</MenuItem>
                <MenuItem value={30}>Heading 3</MenuItem>
                <MenuItem value={30}>options 1</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="font-family">
          <div
            className="formControlWrapper"
            style={{
              "&:hover": {
                borderBottom: "none",
              },
            }}
          >
            <FormControl
              variant="filled"
              size="small"
              sx={{
                m: 0,
                minWidth: 120,
                height: 70,
                outline: "none",
                "&:hover": {
                  borderBottom: "none",
                },
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Arial
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChange}
                sx={{
                  height: 55,
                  backgroundColor: "transparent",
                  "&:before": {
                    borderBottom: "none",
                  },

                  "&:hover:before": {
                    borderBottom: "none !important",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Arial</MenuItem>
                <MenuItem value={10}>Trebuchet Ms</MenuItem>
                <MenuItem value={20}>Comic sans MS</MenuItem>
                <MenuItem value={30}>impact</MenuItem>
                <MenuItem value={30}>Times new roman</MenuItem>
                <MenuItem value={30}>Roboto</MenuItem>
                <MenuItem value={30}>Verdana</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="font-size-btn">
          <Button onClick={handleIncrement}>+</Button>
          <input type="text" value={count} />
          <Button onClick={handleDecrement}>-</Button>
        </div>
        <MdOutlineFormatBold />
        <MdOutlineFormatItalic />
        <MdFormatUnderlined />
        <MdFormatColorText />
        <MdOutlineColorize />
        <FiLink2 />
        <BiCommentAdd />
        <BiImageAlt />

        <div className="text-align">
          <div
            className="formControlWrapper"
            style={{
              "&:hover": {
                borderBottom: "none",
              },
            }}
          >
            <FormControl
              variant="filled"
              size="small"
              sx={{
                m: 0,
                minWidth: 120,
                height: 70,
                outline: "none",
                "&:hover": {
                  borderBottom: "none",
                },
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                text align
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChange}
                sx={{
                  height: 55,
                  backgroundColor: "transparent",
                  "&:before": {
                    borderBottom: "none",
                  },

                  "&:hover:before": {
                    borderBottom: "none !important",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>justify</MenuItem>
                <MenuItem value={10}>center </MenuItem>
                <MenuItem value={20}>left</MenuItem>
                <MenuItem value={30}>right</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <ImParagraphLeft />
        <MdChecklistRtl />
        <MdFormatListBulleted />
        <MdFormatListNumbered />
        <MdOutlineFormatIndentIncrease />
        <MdOutlineFormatIndentDecrease />
        <MdFormatClear />
        <MdOutlineModeEditOutline />
        <div className="hide-menu">
          <Button
            variant="contained"
            endIcon={<KeyboardArrowUpIcon />}
          ></Button>
        </div>
      </div>

      <div className="page">
 
      </div>
    </div>
  );
};

export default Doc;
