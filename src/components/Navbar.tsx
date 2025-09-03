import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../context/login/LoginProvider";


export const Navbar = () => {
  const context = useLogin();
  if (!context) return null;
  const {
    session,
    signInGoogle,
    signOut,
    handleSignInPassword,
    handleSignUpPassword,
    errorMessage,
  } = context;

  return (
    <>
      <nav className="w-full shadow relative bg-primary text-white z-10">
        <div className="flex justify-center items-center py-4 ">
          {/* Centered Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="rounded-lg px-3 py-2  font-medium shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-white/20 hover:bg-buttonHover"
            >
              Home
            </Link>
            <Link
              to="/games"
              className="rounded-lg px-3 py-2  font-medium shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-white/20 hover:bg-buttonHover"
            >
              Games
            </Link>
            <Link
              to="/shop"
              className="rounded-lg px-3 py-2  font-medium shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-white/20 hover:bg-buttonHover"
            >
              Shop
            </Link>
            <Link
              to="/leaderboard"
              className="rounded-lg px-3 py-2  font-medium shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-white/20 hover:bg-buttonHover"
            >
              Leaderboard
            </Link>
          </div>
          {/* Buttons on the right */}
          {!session ? (
            <div className="absolute right-10 flex space-x-4">
              <Link
                to="/login"
                className="rounded-lg px-3 py-2 font-medium bg-secondary shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-white/20 hover:bg-buttonHover"
              >
                Log In
              </Link>
              <Link
                to="signup"
                className="rounded-lg px-3 py-2 font-medium bg-green-500  shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-green-500/50"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="absolute right-10 flex space-x-4">
              <button
                onClick={signOut}
                className="rounded-lg px-3 py-2 font-medium bg-[#F05D5E] shadow-md transition duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-[#F05D5E]/50"
              >
                Sign Out
              </button>
              <p className="text-red-500">{errorMessage}</p>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
