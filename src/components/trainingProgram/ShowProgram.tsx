import { useEffect, useState } from "react";
import { usePurchaseVideo } from "../../hooks/usePurchaseVideo";
import { IVideo } from "../../interface/IVideo";
import Image from "../../img/videoPicture.jpg";
import { useMyVideos } from "../../hooks/useMyVideos";

interface IVideoProps {
  video: IVideo;
}
export const ShowProgram = ({ video }: IVideoProps) => {
  const { purchaseVideo, error } = usePurchaseVideo();
  const { myVideos } = useMyVideos();
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    if (myVideos?.videos?.some((v) => v.id === video.id)) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  }, [myVideos, video.id]);

  const handleClick = async () => {
    await purchaseVideo(video.id);
    console.log(error);
  };

  return (
    <>
      <div className="bg-greyBakground rounded-lg overflow-hidden">
        <img
          src={Image}
          alt="Bild på programmet"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 h-72 overflow-auto my-scrollbar">
          {showBtn ? (
            <button
              onClick={handleClick}
              className=" w-fit bg-primaryButton hover:bg-red-700 text-white font-bold py-2 rounded "
            >
              Lägg till på mina sidor
            </button>
          ) : (
            <p>video redan på mina sidor</p>
          )}

          <div>
            <h3 className="text-xl font-bold mb-2">{video.title}</h3>
            <p className="text-sm text-gray-300 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
