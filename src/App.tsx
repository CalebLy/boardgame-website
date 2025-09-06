import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";

import { Shop } from "./pages/Shop";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { LoginProvider } from "./context/login/LoginProvider";
import { LogIn } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Games } from "./pages/games/Games";
import { TicTacToePage } from "./pages/games/tictactoe/Tictactoe";
import { GameGrid } from "./components/GameGrid";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Router>
        <LoginProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/shop" element={<Shop />} />
            // App.tsx
            <Route path="/games" element={<Games />}>
              <Route index element={<GameGrid />} />
              <Route path="tictactoe" element={<TicTacToePage />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
