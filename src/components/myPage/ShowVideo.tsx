import { IVideo } from "../../interface/IVideo";

interface IShowVideoProps {
  video: IVideo;
}
export const ShowVideo = ({ video }: IShowVideoProps) => {
  return (
    <>
      <div>
        <h2>{video.title}</h2>
        <div className=" w-fit py-2 bg-greyBakground">
          <iframe
            src={`https://player.vimeo.com/video/${video.vimeo_id}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
      </div>
    </>
  );
};
