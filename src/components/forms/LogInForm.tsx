import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";

export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleClick = (email: string, password: string) => {
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-transperant p-8 border-2 border-grey w-96">
          <p className="text-brand">Logga in</p>

          <div className="pt-6 px-3">
            <label className="block text-brand text-sm font-medium mb-2 text-left">
              E-post
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-brand focus:outline-none focus:ring-0 px-2 py-1 w-full border-0 border-b-2 border-grey bg-brand-dark text-brand"
            />
          </div>

          <div className="pt-6 px-3">
            <label className="block text-brand text-sm font-medium mb-2 text-left">
              Lösenord
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-brand focus:outline-none focus:ring-0 px-2 py-1 w-full border-0 border-b-2 border-grey bg-brand-dark text-brand"
            />
          </div>
          <button className="mt-6 text-sm bg-transparent text-brand underline hover:text-brand-light hover:border-none transition-none">
            <NavLink className="navLink" to={"/SignUp"}>
              Skapa konto
            </NavLink>
          </button>
          <button
            className="mt-6 text-sm bg-grey text-brand hover:border-brand"
            onClick={() => handleClick(email, password)}
          >
            Logga in
          </button>
        </div>
      </div>
    </>
  );
};
