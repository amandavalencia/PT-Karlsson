import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { AuthContext } from "./contexts/authContext";
import { IExtendedUser } from "./interface/IExtendedUser";

function App() {
  const [user, setUser] = useState<IExtendedUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;

      if (session) {
        setSession(session);

        const { data: profile, error: profileError } = await supabase
          .from("users")
          .select("is_admin")
          .eq("id", session?.user.id)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError.message);
          setUser(null);
          return;
        }

        const extendedUser: IExtendedUser = {
          ...session?.user,
          is_admin: profile.is_admin,
        };
        setUser(extendedUser);
      } else {
        setUser(null);
      }
    };

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          supabase
            .from("users")
            .select("is_admin")
            .eq("id", session.user.id)
            .single()
            .then(({ data: profile, error }) => {
              if (!error && profile) {
                setUser({
                  ...session.user,
                  is_admin: profile.is_admin,
                });
              } else {
                console.error(
                  "Error fetching profile during auth state change:",
                  error?.message
                );
                setUser(null);
              }
            });
        } else {
          setUser(null);
        }
      }
    );

    setData();
    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign-out error:", error.message);
      throw error;
    }
    setUser(null);
    setSession(null);
  };

  const signIn = async (
    email: string,
    password: string
  ): Promise<IExtendedUser | null> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Sign-in failed:", error.message);
      return null;
    }

    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("is_admin")
      .eq("id", data.user.id);

    if (profileError) {
      console.log(profileError.message + " profileerror");
      return null;
    }

    if (!profile || profile.length === 0) {
      console.error("No profile data found for user.");
      return null;
    }

    const extendedUser: IExtendedUser = {
      ...data.user,
      is_admin: profile[0].is_admin || false,
    };

    setUser(extendedUser);
    return extendedUser;
  };
  console.log("är user admin?" + user?.is_admin);

  const signUp = async (email: string, password: string, username: string) => {
    try {
      const { data: signUpData, error: authError } = await supabase.auth.signUp(
        { email, password }
      );

      if (authError) throw authError;
      if (!signUpData.user) throw new Error("Sign-up failed");

      const { error: dbError } = await supabase.from("users").insert([
        {
          id: signUpData.user.id,
          email: email,
          username: username,
          password_hash: password,
        },
      ]);
      if (dbError) throw dbError;

      // Uppdatera användartillstånd
      setUser(signUpData.user);
      return signUpData.user; // Returnera användaren
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during sign-up:", error.message);
        return null;
      }
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ user, session, signUp, signOut, signIn }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
