import { useState, useEffect, type ReactNode, useContext } from "react";
import { supabase } from "../../lib/supabase";
import { LoginContext, type LoginContextProps } from "./LoginContext.tsx";

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<LoginContextProps["session"]>(null);
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
    <LoginContext.Provider value={{ session, signIn, signOut, errorMessage }}>
      {children}
    </LoginContext.Provider>
  );

  
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
