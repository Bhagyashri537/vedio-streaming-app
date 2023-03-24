import { useDispatch } from "react-redux"
import { hamburger_url, userIconIrl, youtubeUrl } from "../utils/imgurl"
import { toggleAction } from "../utils/menuSlice"


const Header = () => {
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleAction.toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-2 ">
        <img className="h-14 cursor-pointer" src={hamburger_url} alt="logo" onClick={() => toggleMenuHandler()}/>
        <img className="h-14 mx-3" src={youtubeUrl} alt="/"/>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-slate-500 p-1 rounded-l-full" type="text" placeholder="search here"  />
        <button className="border border-slate-500 rounded-r-full p-1">search</button>
      </div>
      <div className="col-span-1">
        <img className="h-10" src ={userIconIrl} alt="/" />
      </div>
        </div>

    )
}
export default Header