import { About } from "../components/About";
import { LevelCards } from "../components/cards/LevelCards";
import { Footer } from "../components/Footer";
import { useRef } from "react";

export const Home = () => {
  const levelCardsRef = useRef<HTMLDivElement>(null);

  const scrollToLevelCards = () => {
    if (levelCardsRef.current) {
      levelCardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="homeViewHight w-full bg-[url('/src/img/VBKarlsson.jpeg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center ml-10 w-screen gap-5">
          <h1 className="text-white text-4xl font-bold w-fit">
            Världens Bästa Karlsson
          </h1>
          <p className="w-4/5 text-brand bg-brand-dark/70 lg:w-1/2">
            Redan nu är det rätt tid att börja! Oavsett om du vill komma i form,
            lära dig kampsport eller utveckla din disciplin, är vårt
            kampsportsprogram den perfekta starten. Anmäl dig idag och ta det
            första steget mot att bli en starkare och mer självsäker version av
            dig själv!
          </p>
          <button
            onClick={scrollToLevelCards}
            className="w-fit bg-primaryButton text-brand hover:border-none transition-none active:border-none"
          >
            Sätt igång redan nu!
          </button>
        </div>
      </div>
      <div ref={levelCardsRef}>
        <LevelCards></LevelCards>
      </div>
      <About></About>
      <Footer></Footer>
    </>
  );
};
