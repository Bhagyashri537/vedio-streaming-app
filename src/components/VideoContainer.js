import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { youTubeApi } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getSaveVideos();
  }, []);

  const getSaveVideos = async () => {
    const data = await fetch(youTubeApi);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
