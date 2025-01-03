import { NavLink } from "react-router-dom";

interface IConfirmationMessageProps {
  message: string;
  btnMessage: string;
}
export const ConfirmationMessage = ({
  message,
  btnMessage,
}: IConfirmationMessageProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-brand gap-y-10">
        {message}
        <button className="bg-primaryButton hover:border-primaryButton  ">
          <NavLink className="text-brand hover:text-brand" to={"/MyPage"}>
            {btnMessage}
          </NavLink>
        </button>
      </div>
    </>
  );
};
