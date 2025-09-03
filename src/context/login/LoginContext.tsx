import { createContext } from "react";
import type { Session } from "@supabase/supabase-js";

export interface LoginContextProps {
  session: Session | null;
  signInGoogle: () => void;
  signOut: () => void;
  handleSignInPassword: (data: {email: string, password: string}) => void;
  handleSignUpPassword: (data: {email: string, password: string}) => void;
  errorMessage: string | undefined;
}

export const LoginContext = createContext<LoginContextProps | undefined>(
  undefined
);
