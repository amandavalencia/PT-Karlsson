import { useEffect, useState } from "react";
import { IVideo } from "../interface/IVideo";
import { supabase } from "../supabaseClient";

interface IVideoState {
  videos: IVideo[] | null;
  error: string | null;
  fetchDone: boolean;
}

export const useFilteredVideos = (level: string | undefined) => {
  const [state, setState] = useState<IVideoState>({
    videos: [],
    error: null,
    fetchDone: false,
  });

  const getData = async (level: string | undefined) => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .eq("level", level);

    setState({
      videos: data || null,
      error: error?.message || null,
      fetchDone: true,
    });
  };

  useEffect(() => {
    if (state.fetchDone) return;
    if (!level) {
      setState({
        videos: [],
        error: "Ingen nivå angiven.",
        fetchDone: true,
      });
      return;
    }
    getData(level);
  }, [level, state.fetchDone]);

  return {
    videos: state.videos,
    error: state.error,
    fetchDone: state.fetchDone,
  };
};
