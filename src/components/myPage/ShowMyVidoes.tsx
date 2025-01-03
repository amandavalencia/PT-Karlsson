import { useContext } from "react";
import { useMyVideos } from "../../hooks/useMyVideos";
import { AuthContext } from "../../contexts/authContext";
import { ShowVideo } from "./ShowVideo";

export const ShowMyVideos = () => {
  const { myVideos } = useMyVideos();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="text-white py-5 max-w-7xl mx-auto px-4">
        <h2 className="text-brand text-xl font-bold p-5">
          Välkommen {user?.email}!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4">
          {myVideos.videos?.map((video) => (
            <ShowVideo video={video} key={video.id}></ShowVideo>
          ))}
        </div>
      </div>
    </>
  );
};
