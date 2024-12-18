import { useContext } from "react";
import { SignUpForm } from "../components/forms/SignUpForm";
import { AuthContext } from "../contexts/authContext";
import { ConfirmationMessage } from "../components/ConfirmationMessage";

export const SignUp = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <ConfirmationMessage message="Till mina sidor"></ConfirmationMessage>
      ) : (
        <SignUpForm></SignUpForm>
      )}
    </>
  );
};
