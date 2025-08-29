import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Links,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";
import { Login } from "./pages/Login";
import { Games } from "./pages/Games";
import { Shop } from "./pages/Shop";
import { Navbar } from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/play" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
