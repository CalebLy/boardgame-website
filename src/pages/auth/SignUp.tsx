import { useState, type ChangeEvent } from "react";
import "../../index.css";
import { useLogin } from "../../context/login/LoginProvider";
import { AuthForm } from "../../components/AuthForm";

export const SignUp = () => {
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
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="bg-secondary py-8 px-10 rounded-xl shadow-lg w-full max-w-sm flex flex-col items-center space-y-4">
          <AuthForm title="Sign Up" onSubmit={handleSignUpPassword} errorMessage={errorMessage} />
          {/* Error message */}
          {errorMessage && (
            <p className="text-red-500 text-center w-full">{errorMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};
