import { createContext } from "react";
import type { Session } from "@supabase/supabase-js";

export interface LoginContextProps {
  session: Session | null;
  signIn: () => void;
  signOut: () => void;
  errorMessage: string | null;
}

export const LoginContext = createContext<LoginContextProps | undefined>(undefined);
