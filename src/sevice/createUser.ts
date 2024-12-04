import { supabase } from "../supabaseClient";

export const createUser = async (
  email: string,
  password: string,
  username: string
): Promise<boolean> => {
  try {
    // Skapa användaren via Supabase auth
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    // Kolla om det finns ett fel vid registrering
    if (error) {
      throw error;
    }

    // Kontrollera om användaren är skapad och vi har ett användar-ID
    if (!signUpData.user) {
      throw new Error("No user returned from signUp");
    }

    // Efter att användaren har registrerats, skapa en användare i din databas (om du har en användartabell)
    const { error: dbError } = await supabase
      .from("users") // Namnet på din tabell i Supabase
      .insert([
        {
          email: email,
          username: username,
          password_hash: password,
        },
      ])
      // .select() måste ha om jag ska returnera användaren
      .single();

    // Kolla om det blev ett fel vid insättning i databasen
    if (dbError) {
      throw dbError;
    }

    console.log("User created");
    return true; // Retur av den skapade användaren behöver fixa select om jag ska returnera användaren här
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      return false;
    } else {
      console.error("An unknown error occurred");
      return false;
    }
  }
};
