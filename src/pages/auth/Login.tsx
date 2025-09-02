import "../../index.css";
import { useLogin } from "./LoginProvider";



export const Login = () => {
  const context = useLogin();
  if (!context) return null;
  const { session, signIn, signOut, errorMessage } = context;
  return (
    <>
      {!session ? (
        // If there's no session → show sign-in button
        <div className="flex justify-center space-x-6 py-4">
          <button
            onClick={signIn}
            className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Sign In With Google
          </button>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      ) : (
        // If there's a session → show welcome + sign-out
        <div className="grid justify-center space-x-6 py-4 place-items-center  h-64 bg-gray-200">
          <h2>Welcome, {session.user?.email}</h2>
          <button
            onClick={signOut}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Sign Out
          </button>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
