
import "../../index.css";
import { useLogin } from "../../context/login/LoginProvider";
import { AuthForm } from "../../components/AuthForm";

export const LogIn = () => {
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
      {!session && (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-secondary py-8 px-10 rounded-xl shadow-lg w-full max-w-sm flex flex-col items-center space-y-4">
          <AuthForm title="Log In" onSubmit={handleSignInPassword} errorMessage={errorMessage}/>

          {/* Divider */}
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="px-4 text-gray-300 font-medium">Or</span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          {/* Google Sign-in */}
          <button
            onClick={signInGoogle}
            className="border rounded-lg px-8 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900 transition w-full"
          >
            Sign In With Google
          </button>
          </div>
        </div>
      )}
    </>
  );
};
