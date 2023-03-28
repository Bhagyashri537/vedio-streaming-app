import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toggleAction } from "../utils/menuSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
 // console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(toggleAction.closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="550"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchPage;
