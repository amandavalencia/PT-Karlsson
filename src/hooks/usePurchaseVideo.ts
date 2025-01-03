import { useContext, useState } from "react";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../contexts/authContext";

export const usePurchaseVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { session } = useContext(AuthContext);

  const purchaseVideo = async (videoId: number) => {
    setIsLoading(true);
    setError(null);

    if (!session || !session.user) {
      console.error("User is not logged in.");
      return;
    }
    const userId = session.user.id;
    const date = new Date().toISOString().split("T")[0];

    try {
      const { data, error } = await supabase
        .from("userVideos")
        .insert([{ user_id: userId, video_id: videoId, purchased_at: date }]);

      if (error) console.log(error.message);
      console.log("köpet lyckades");

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { purchaseVideo, isLoading, error };
};
