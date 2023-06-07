import Doc from "./Components/Doc/Doc";
import Signinpage from "./Components/Signinpage/Signinpage";
import Signuppage from "./Components/Signuppage/Signuppage";
// import Editor from "./Components/Editor/Editor";
import CustomEditor from "./Components/CustomEditor/CustomEditor";
// import Myeditor from "./Components/CustomEditor/Myeditor";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Doc />

        <Routes>
          {/* <Route path="/" element={<Myeditor />} /> */}
          <Route path="/" element={<CustomEditor />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/home" element={<Doc />} />
          {/* <Route path="/" element={<Editor />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
