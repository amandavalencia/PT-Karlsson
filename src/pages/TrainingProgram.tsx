import { useParams } from "react-router-dom";

export const TrainingProgram = () => {
  const { level } = useParams();
  return (
    <>
      <h1> programet du klickat på: {level}</h1>
    </>
  );
};
