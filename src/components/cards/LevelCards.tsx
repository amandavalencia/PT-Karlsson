import { LEVELS } from "../../constants/levels";
import { LevelCard } from "./LevelCard";

export const LevelCards = () => {
  return (
    <>
      <div className="lg:flex flex-col items-center bg-greyBackground h-screen">
        <h2 className="text-brand text-xl font-bold p-5 mt-5">Välj nivå</h2>
        <p className="text-brand p-5">Läs mer om den nivån som passar dig</p>
        <div className="grid grid-cols-1 gap-10 h-3/5  px-4 max-w-6xl lg:mt-10 lg:grid-cols-3">
          {LEVELS.map((level) => (
            <LevelCard key={level.id} level={level}></LevelCard>
          ))}
        </div>
      </div>
    </>
  );
};
