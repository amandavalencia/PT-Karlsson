import { useContext } from "react";
import { SignUpForm } from "../components/forms/SignUpForm";
import { AuthContext } from "../contexts/authContext";
import { ConfirmationMessage } from "../components/buttons/ConfirmationMessage";

export const SignUp = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <ConfirmationMessage
          btnMessage="Till mina sidor"
          message="Registrering lyckades!"
        ></ConfirmationMessage>
      ) : (
        <SignUpForm></SignUpForm>
      )}
    </>
  );
};
