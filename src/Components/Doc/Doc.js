import React, { useState, useRef, useEffect } from "react";
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
import IconButton from "@mui/material/IconButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Doc = ({ value, onChange }) => {
  const pdfRef = useRef();

  useEffect(() => {
    if (pdfRef.current) {
      downloadPDF();
    }
  }, []);

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Document.pdf");
    });
  };

  const contentRef = useRef(null);

  const [zoom, setZoom] = useState("");
  const [count, setcount] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedFontSize, setSelectedFontSize] = useState(3);
  // const [selectedColor, setSelectedColor] = useState("red"); // Initial font color is black
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [textAlign, setTextAlign] = useState("");

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setZoom(value);
  //   setSelectedFont(value);
  //   document.execCommand("fontName", false, value);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "fontFamily") {
      setZoom(value);
      setSelectedFont(value);
      document.execCommand("fontName", false, value);
    } else if (name === "fontSize") {
      setSelectedFontSize(value);
      document.execCommand("fontSize", false, value);
    }
  };

  const handleIncrement = (event) => {
    setcount(count + 1);
    document.execCommand("increaseFontSize", false, null);
  };
  const handleDecrement = (event) => {
    setcount(count - 1);
    document.execCommand("decreaseFontSize", false, null);
  };

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
  };
  const handleRedoClick = () => {
    document.execCommand("redo", false, null);
    // alert("Icon clicked");
  };
  const handleUndoClick = () => {
    document.execCommand("undo", false, null);
    // alert("Icon clicked");
  };
  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
    alert("italic clicked");
  };
  const handleUnderlinedClick = () => {
    document.execCommand("underline", false, null);
    alert("underline clicked");
  };
  const handleLinkClick = () => {
    document.execCommand("createLink", false, null);
    alert("underline clicked");
  };
  // const handleColorClick = () => {
  //   document.execCommand("foreColor", false, "red");
  //   alert("color clicked");
  //   setSelectedColor("red");
  // };

  // const handleColorClick = () => {
  //   document.execCommand("foreColor", false, "textColors");

  //   setShowColorPicker(!showColorPicker);

  // };

  // const handleColorChange = (event) => {
  //   document.execCommand("foreColor", false, "textColors");

  //   setSelectedColor(event.target.value);
  // };

  const handleFontChange = () => {
    document.execCommand("fontName", false, selectedFont);
    setSelectedFontSize(selectedFont);
  };

  // const handleTextAlign = (textAlign) => {
  //   setTextAlign(event.target.value);
  //   document.execCommand("justify" + textAlign, false, null);
  // };

  const fontOptions = [
    "Arial",
    "Trebuchet Ms",
    "Comic sans MS",
    "Impact",
    "Times new roman",
    "Roboto",
    "Verdana",
  ];
  const textColors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
  ];

  const fontSizeOptions = [1, 2, 3, 4, 5, 6, 7];

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
        <IconButton onClick={handleRedoClick}>
          <GrRedo />
        </IconButton>
        <IconButton onClick={handleUndoClick}>
          <GrUndo />{" "}
        </IconButton>
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
                {/* Arial */}
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectedFont}
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
                {/* <MenuItem value={10}>Arial</MenuItem>
                <MenuItem value={10}>Trebuchet Ms</MenuItem>
                <MenuItem value={20}>Comic sans MS</MenuItem>
                <MenuItem value={30}>impact</MenuItem>
                <MenuItem value={30}>Times new roman</MenuItem>
                <MenuItem value={30}>Roboto</MenuItem>
                <MenuItem value={30}>Verdana</MenuItem> */}
                {fontOptions.map((font) => (
                  <MenuItem key={font} value={font}>
                    {font}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="font-size-btn">
          <Button onClick={handleIncrement}>+</Button>
          <input type="text" value={count} readOnly />
          <Button onClick={handleDecrement}>-</Button>
        </div>

        <IconButton onClick={handleBoldClick}>
          <MdOutlineFormatBold />
        </IconButton>
        <IconButton onClick={handleItalicClick}>
          <MdOutlineFormatItalic />
        </IconButton>
        <IconButton onClick={handleUnderlinedClick}>
          <MdFormatUnderlined />
        </IconButton>

        {/* <IconButton
          onClick={handleColorClick}
          type="color"
          value={selectedColor}
        >
          <MdFormatColorText />{" "}
        </IconButton> */}

        <IconButton
          // onClick={handleColorClick}
          type="button"
          style={{ backgroundColor: selectedColor }}
        >
          <MdFormatColorText />
        </IconButton>

        <MdOutlineColorize />
        <IconButton onClick={handleLinkClick}>
          <FiLink2 />
        </IconButton>
        <BiCommentAdd />
        <BiImageAlt />

        <div className="text-align">
          <div
            className="formControlWrapper"
            style={{
              "&:hover": {
                borderBottom: "none",
              },
              textAlign: textAlign,
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

      <div
        className="page"
        ref={contentRef}
        // ref={pdfRef}
        contentEditable="true"
        style={{ border: "1px solid #ccc" }}
      ></div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default Doc;
