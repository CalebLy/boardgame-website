import { useState, useEffect, type ReactNode, useContext } from "react";
import { supabase } from "../../lib/supabase.ts";
import { LoginContext, type LoginContextProps } from "./LoginContext.tsx";
import { useNavigate } from "react-router-dom";

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<LoginContextProps["session"]>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

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



  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.warn("Sign Out failed:", error.message);
      setErrorMessage("Failed to sign out. Please try again.");
    } else {
      setErrorMessage(undefined);
      navigate("./");
    }
  };

  const signInGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.warn("Sign in failed:", error.message);
      setErrorMessage("Failed to sign in. Please try again.");
    } else {
      setErrorMessage(undefined);
    }
  };


  const handleSignInPassword = async (data: {email: string, password: string}) => {
    const {email, password} = data;
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error Signing In:", error.message);
        setErrorMessage("Error Signing In: " + error.message);
        return { success: false, message: error.message };
      }

      navigate("./");
      return { success: true };
    } catch (err) {
      console.error("Unexpected error during sign-in:", err);
      return { success: false, message: "Unexpected error occurred." };
    }
  };


  const handleSignUpPassword = async (data: {email: string, password: string}) => {
    const {email, password} = data;
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Error Signing Up:", error.message);
        setErrorMessage("Error Signing Up: " + error.message);
        return { success: false, message: error.message };
      }
      
      navigate("./");
      return { success: true };
    } catch (err) {
      console.error("Unexpected error during sign-up:", err);
      return { success: false, message: "Unexpected error occurred." };
    }
  };

  return (
    <LoginContext.Provider
      value={{
        session,
        signInGoogle,
        signOut,
        handleSignInPassword,
        handleSignUpPassword,
        errorMessage,
      }}
    >
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
