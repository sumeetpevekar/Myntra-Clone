import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { wishListAction } from "../store/WishList";
import { bagItemsAction } from "../store/bag";

const WishlistItem = ({item}) => {
    const dispatch = useDispatch()
    const bagItems = useSelector(store => store.bag)
    const removeFromWishlist = (id) => {
        console.log("removed", id)
        dispatch(wishListAction.removeItems(id))
    }
    const addToBag = (id) => {
        console.log("hello")
        dispatch(wishListAction.removeItems(id))
        console.log(bagItems)
        if(bagItems.includes(id)){
            return;
        }else{
            dispatch(bagItemsAction.addItems(id))
        }
    }
        return (
        <div className="item-container wishlist-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="item-name wishlist-item-name">{item.company} {item.item_name}</div>
            <div className="price wishlist-item-price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            <div className="moveBagContainer">
                <button onClick={() => addToBag(item.id)} className="wishlistMoveToBag">Move To Bag</button>
            </div>
            <button className="wishlistBtn wishlistRemoveBtn" onClick={() => removeFromWishlist(item.id)}><HiOutlineXMark  /></button>
        </div>
    )
}
export default WishlistItem;