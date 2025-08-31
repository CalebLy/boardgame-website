import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";
import { Login } from "./pages/auth/Login";
import { Games } from "./pages/Games";
import { Shop } from "./pages/Shop";
import { Navbar } from "./components/Navbar";


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
