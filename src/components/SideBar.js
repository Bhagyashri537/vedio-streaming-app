import { useSelector } from "react-redux";
import { AiFillHome, AiTwotoneThunderbolt, AiOutlineLike } from "react-icons/ai";
import { FaMusic, FaNewspaper, FaRedditAlien, FaTripadvisor } from "react-icons/fa";
import {MdOutlineVideoLibrary} from "react-icons/md"
import {BsStopwatch, BsPlusCircle} from "react-icons/bs";
import {GoHistory} from "react-icons/go";
import {RiVideoLine} from "react-icons/ri"





const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.menu.isMenuOpen)

    if(!isMenuOpen) return null;
    return (
        <div className="p-10 shadow-lg w-96 ">
           
            <h2 className="font-bold flex place-content-evenly items-center hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer" >  < AiFillHome/> Home</h2>
            <ul className="">
           <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer">< FaMusic/> Music</li>
               
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer">< AiTwotoneThunderbolt/> Shorts</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer " > <FaNewspaper/>News</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer "> < FaRedditAlien/>Food</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> <FaTripadvisor/>Entertainment</li>
            </ul>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            <ul  >
                <li className=" flex place-content-evenly items-center   hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> <MdOutlineVideoLibrary/>Library</li>
                <li className=" flex place-content-evenly items-center   hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> <GoHistory/>History</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> <BsStopwatch/>Watch Later</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> < RiVideoLine/>Your Videos</li>
                <li className=" flex place-content-evenly items-center  hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer"> <AiOutlineLike/>Liked Video</li>
                <li className=" flex place-content-evenly items-center hover:bg-slate-300 hover:rounded-md p-1 cursor-pointer "> <BsPlusCircle/>Create Video</li>
                <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
                
            </ul>
            <ul>
                <li className="p-2 font-medium">Subscription</li>
                <li className="p-2 font-medium">Netfilx</li>
                <li className="p-2 font-medium">Kitchen cloud </li>
                <li className="p-2 font-medium">Movie hub</li>
                <li className="p-2 font-medium">King</li>
                <li className="p-2 font-medium">Many More</li>
            </ul>
        </div>
    )
}
export default Sidebar;