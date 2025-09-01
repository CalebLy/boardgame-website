import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full shadow relative bg-primary text-white z-0">
      <div className="flex justify-center items-center py-4 z-10">
        {/* Centered Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/games"
            className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Games
          </Link>
          <Link
            to="/shop"
            className="rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Shop
          </Link>
          <Link
            to="/leaderboard"
            className="rounded-lg px-3 py-2  font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Leaderboard
          </Link>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex space-x-4">
          <Link
            to="/signup"
            className="rounded-lg px-3 py-2 text-white font-medium bg-green-700 hover:bg-white hover:text-primary"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="rounded-lg px-3 py-2 text-white font-medium bg-secondary hover:bg-white hover:text-primary"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
