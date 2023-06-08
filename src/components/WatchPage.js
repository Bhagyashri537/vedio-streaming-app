import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toggleAction } from "../utils/menuSlice";
import CommentsContainer from "./CommentsContainer";
import { FcLike } from "react-icons/fc";

const WatchPage = ({info}) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // const location = useLocation()
  // const nav = useNavigate()
  // const query = new URLSearchParams(location.search)
  // const myparam = query.get('myparam')
  
  useEffect(() => {
    dispatch(toggleAction.closeMenu());
  }, []);
  return (
    <div className="flex">
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
      <div>
        <h2>like <FcLike/></h2>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  );
};
export default WatchPage;
