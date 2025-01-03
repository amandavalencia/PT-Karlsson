import { Session } from "@supabase/supabase-js";
import { createContext } from "react";
import { IExtendedUser } from "../interface/IExtendedUser";

interface IAuthContext {
  user: IExtendedUser | null;
  session: Session | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    username: string
  ) => Promise<IExtendedUser | null | undefined>;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<IExtendedUser | null>;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  session: null,
  loading: true,
  signUp: async () => null,
  signOut: async () => {},
  signIn: async () => null,
});
