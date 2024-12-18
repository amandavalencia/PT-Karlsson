import { NavLink } from "react-router-dom";

interface IConfirmationMessageProps {
  message: string;
}
export const ConfirmationMessage = ({ message }: IConfirmationMessageProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-brand gap-y-10">
        Inloggning lyckades!
        <button className="bg-primaryButton hover:border-primaryButton  ">
          <NavLink className="text-brand hover:text-brand" to={"/MyPage"}>
            {message}
          </NavLink>
        </button>
      </div>
    </>
  );
};
