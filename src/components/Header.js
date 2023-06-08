import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { hamburger_url, userIconIrl, youtubeUrl } from "../utils/imgurl";
import { toggleAction } from "../utils/menuSlice";
import { GoSearch } from "react-icons/go"

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    //console.log(searchQuery)
    const timer = setTimeout(() => getSearchSuggestion(), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json)
    setSuggestion(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleAction.toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-2 ">
        <img
          className="h-10 cursor-pointer"
          src={hamburger_url}
          alt="logo"
          onClick={() => toggleMenuHandler()}
        />
        <img className="h-12 mx-3" src={youtubeUrl} alt="/" />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-slate-500 p-1 rounded-l-full"
          type="text"
          placeholder="search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border-2 border-slate-500 rounded-r-full p-2 px-3 items-center">
        <GoSearch />
        </button>
        {showSuggestion && (
          <div className="fixed bg-white pt-8 px-5 py-2 w-[37rem] shadow-lg rounded-lg ">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
            
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-10" src={userIconIrl} alt="/" />
      </div>
    </div>
  );
};
export default Header;
