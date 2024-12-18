import { About } from "../components/About";
import { LevelCards } from "../components/cards/LevelCards";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-[url('/src/img/VBKarlsson.jpeg')] bg-cover bg-center flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Världens Bästa Karlsson
        </h1>
      </div>
      <LevelCards></LevelCards>
      <About></About>
      <Footer></Footer>
    </>
  );
};
