import { supabase } from "../../lib/supabase";
import Auth from "../../components/AuthForm";
import Account from "./Account";
import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import AuthForm from "../../components/AuthForm";

export const Login = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};
