import { useParams } from "react-router-dom";
import { useFilteredVideos } from "../../hooks/useFilteredVideos";
import { Loader } from "../Loader";
import { ShowProgram } from "./ShowProgram";

export const ShowPrograms = () => {
  const { level } = useParams();
  const { videos, error, fetchDone } = useFilteredVideos(level);

  if (error) {
    console.log(error); // ska fixa nått error meddelande
  }

  return (
    <>
      {!fetchDone ? (
        <Loader />
      ) : (
        <div className="text-white py-5 max-w-7xl mx-auto px-4">
          <h2 className="text-brand text-xl font-bold p-5">Välj program</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {videos?.map((video) => (
              <ShowProgram video={video} key={video.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
