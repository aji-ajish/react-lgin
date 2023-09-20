import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="form">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
