import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILevel } from "../../interface/ILevel";

interface ILevelCardProps {
  level: ILevel;
}
export const LevelCard = ({ level }: ILevelCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/TrainingProgram/" + level.id);
  };

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute bg-glowing_shade_light inset-0 lg:bg-gradient-to-b from-glowing_shade to-glowing_shade_gradiant rounded-xl blur opacity-75"></div>
        <div className="relative w-full h-full flex flex-col items-center bg-brand-dark rounded-xl lg:w-[310px]">
          <div className="flex flex-col justify-between w-full h-full px-4">
            <div className="flex justify-between lg:border-b border-grey">
              <h3 className="text-brand text-2xl my-10">{level.title}</h3>
              <button
                onClick={toggleClass}
                className="text-xs text-brand px-1 py-0 m-3 bg-transparent border border-brand rounded-xl w-fit h-fit md:hidden"
              >
                info
              </button>
            </div>
            <button
              onClick={handleClick}
              className="bg-primaryButton text-brand m-5"
            >
              Välj
            </button>
          </div>

          <div
            id="infoDiv"
            onClick={toggleClass}
            className={`${
              isActive ? "" : "hidden"
            } absolute top-0 left-0 w-full h-full rounded-xl bg-brand-light bg-opacity-90 z-10 flex justify-center items-center`}
          >
            <div className="p-8 text-center text-brand-dark">
              <p>{level.info}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
