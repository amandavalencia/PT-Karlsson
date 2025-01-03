import { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../contexts/authContext";
import { IVideo } from "../interface/IVideo";
import { IUserVideos } from "../interface/IUserVideos";

interface IVideoState {
  videos: IVideo[] | null;
  error: string | null;
  fetchDone: boolean;
}
interface IUserVideoState {
  userVideos: IUserVideos[] | null;
  error: string | null;
  fetchDone: boolean;
}

export const useMyVideos = () => {
  const { session } = useContext(AuthContext);
  const [userVideo, setUserVideo] = useState<IUserVideoState>({
    userVideos: [],
    error: null,
    fetchDone: false,
  });

  const [myVideos, setMyVideos] = useState<IVideoState>({
    videos: [],
    error: null,
    fetchDone: false,
  });

  const getUserVideo = useCallback(async () => {
    const { data, error } = await supabase
      .from("userVideos")
      .select("*")
      .eq("user_id", session?.user.id);
    if (error) {
      console.log(error.message);
      setUserVideo({
        userVideos: null,
        error: error.message,
        fetchDone: true,
      });
      return;
    }
    setUserVideo({
      userVideos: data || null,
      error: error || null,
      fetchDone: true,
    });
  }, [session?.user.id]);

  const getVideos = async (videoIds: number[]) => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .in("id", videoIds);

    if (error) {
      console.log(error.message);
      return;
    }
    setMyVideos({
      videos: data || null,
      error: error || null,
      fetchDone: true,
    });
  };

  useEffect(() => {
    if (session?.user.id) {
      getUserVideo();
    }
  }, [session, getUserVideo]);

  useEffect(() => {
    if (userVideo.fetchDone && userVideo.userVideos) {
      const videoIds = userVideo.userVideos.map((video) => video.video_id);
      getVideos(videoIds);
    }
  }, [userVideo.fetchDone, userVideo.userVideos]);

  return {
    myVideos,
    refreshUserVideos: getUserVideo,
  };
};
