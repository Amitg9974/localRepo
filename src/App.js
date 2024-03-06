import "./App.css";
// import Test1 from './components/test1';
import Register from "./components/register";
import Login from "./components/login";
import Profile from "./components/profile";
import Todo from "./components/test2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router> */}
      <Todo/>
    </div>
  );
}

export default App;
