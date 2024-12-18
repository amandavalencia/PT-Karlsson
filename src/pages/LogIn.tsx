import { useContext } from "react";
import { LogInForm } from "../components/forms/LogInForm";
import { AuthContext } from "../contexts/authContext";
import { ConfirmationMessage } from "../components/ConfirmationMessage";

export const LogIn = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <ConfirmationMessage message="Inloggning lyckades!"></ConfirmationMessage> //måste ändra det ska vara buttonmessage och en message
      ) : (
        <LogInForm></LogInForm>
      )}
    </>
  );
};
