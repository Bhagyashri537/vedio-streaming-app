import { useSelector } from "react-redux";


const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.menu.isMenuOpen)

    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-48">
            <h2>Subscription</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
                <li>News</li>
                <li>Food</li>
                <li>Entertainment</li>
            </ul>
        </div>
    )
}
export default Sidebar;