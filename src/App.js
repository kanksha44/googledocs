import Doc from "./Components/Doc/Doc";
import Signinpage from "./Components/Signinpage/Signinpage";
import Signuppage from "./Components/Signuppage/Signuppage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signuppage />} />
          <Route path="/loggedin" element={<Signinpage />} />
          <Route path="/home" element={<Doc />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
