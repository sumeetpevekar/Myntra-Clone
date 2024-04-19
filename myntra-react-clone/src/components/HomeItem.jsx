import { useDispatch, useSelector } from "react-redux";
import { bagItemsAction } from "../store/bag";
import { BsCartPlus } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { wishListAction } from "../store/WishList";
import { FaHeart } from "react-icons/fa";
const HomeItem = ({item}) => {
    const dispatch = useDispatch()
    const bag = useSelector(store => store.bag)
    const wishlist = useSelector(store => store.wishlist)
    const elementFound = bag.indexOf(item.id) >= 0;
    const wishlistFound = wishlist.indexOf(item.id) >= 0;
    // console.log(elementFound, item.id )
    // console.log(bag)
    const addToBag = (item) => {
        console.log(item);
        dispatch(bagItemsAction.addItems(item.id));
        console.log(bag)
    }
    const removeFromBag = (id) => {
        dispatch(bagItemsAction.deleteItems(item.id))
        console.log(id)
    } 
    const addToWishList = (id) => {
        console.log(id)
        dispatch(wishListAction.addItems(id))
        console.log(wishlist)
    }
    const removeFromWishlist = (id) => {
        console.log(id)
        dispatch(wishListAction.removeItems(id))
        console.log(wishlist)
    }
    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {elementFound ?  <button type="button" class="btn-add-bag btn btn-danger"  onClick={() => removeFromBag(item.id)}><BsCartX /> Remove from Bag</button>  : <button type="button" class="btn-add-bag btn btn-success"  onClick={() => addToBag(item)}><BsCartPlus /> Add to Bag</button>}
            
            {wishlistFound ? <button className="wishlistBtn wishlistBtn2" onClick={() => removeFromWishlist(item.id)}><FaHeart /></button> : <button className="wishlistBtn" onClick={() => addToWishList(item.id)}><CiHeart /></button>}
        </div>
    )
}
export default HomeItem;