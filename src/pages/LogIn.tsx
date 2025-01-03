import { useContext } from "react";
import { LogInForm } from "../components/forms/LogInForm";
import { AuthContext } from "../contexts/authContext";
import { ConfirmationMessage } from "../components/buttons/ConfirmationMessage";

export const LogIn = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <ConfirmationMessage
          btnMessage="Till mina sidor"
          message="Inloggning lyckades!"
        ></ConfirmationMessage>
      ) : (
        <LogInForm></LogInForm>
      )}
    </>
  );
};
