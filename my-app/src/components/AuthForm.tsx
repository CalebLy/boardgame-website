import "../index.css";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

export default function AuthForm() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.warn("Sign Out failed:", error.message);
      setErrorMessage("Failed to sign out. Please try again.");
    } else {
      setErrorMessage("");
    }
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.warn("Sign in failed:", error.message);
      setErrorMessage("Failed to sign in. Please try again.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      {!session ? (
        // If there's no session → show sign-in button
        <div className="flex justify-center space-x-6 py-4">
          <button
            onClick={signIn}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            Sign In With Google
          </button>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      ) : (
        // If there's a session → show welcome + sign-out
        <div className="grid justify-center space-x-6 py-4 place-items-center  h-64 bg-gray-200" >
          <h2>Welcome, {session.user?.email}</h2>
          <button onClick={signOut} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sign Out</button>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
    </>
  );
}
