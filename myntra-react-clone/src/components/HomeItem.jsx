import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

const HomeItem = ({item}) => {

    const bagItems = useSelector(store => store.bag)
    // console.log(bag)
    const elementFound = bagItems.indexOf(item.id) >= 0;
    const dispatch = useDispatch();
    return(
        <>
        <div className="item-container">
        <img className="item-image" src={item.image} alt="ring image"/>
        <div className="rating">
        {item.rating.stars}⭐| {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% off</span>
        </div>
        {elementFound ?  <button type="button" className="btn btn-add-bag btn-danger"  onClick={() =>dispatch(bagActions.removeFromBag(item.id))}><MdOutlineRemoveShoppingCart /> Remove</button> :
        <button type="button" className="btn btn-add-bag btn-success" onClick={() => {dispatch(bagActions.addToBag(item.id))}}><MdOutlineAddShoppingCart /> Add to Bag</button> }
        </div>`
        </>
    )
}
export default HomeItem;