import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Header = () => {
    const bagItems = useSelector(store => store.bag)
    return (
        <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="action_name"><LuUser2 /></span>
            </div>

            <Link className="action_container" to="/wishlist">
                <span className="action_name"><FaRegHeart  /></span>
            </Link>

            <Link className="action_container" to="/bag">
                <span className="action_name"><HiOutlineShoppingBag  /></span>
                {bagItems.length > 0 && <span className="bag-item-count">{bagItems.length}</span>}
            </Link>
        </div>
    </header>
    )
}
export default Header;