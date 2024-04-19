import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { bagItemsAction } from "../store/bag";
import { useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { wishListAction } from "../store/WishList";

const BagItem = ({item}) => {
    const imgElement = useRef()
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const toggleModal = () => {
        setModalActive(!modalActive)
        console.log(imgElement)
        console.log(imgElement.current.src)
        imgElement.current.src = item.image;
    }
    const removeFromBag = () => {
        setModalActive(false)
        dispatch(bagItemsAction.deleteItems(item.id))
    }
    const moveToWishlist = () => {
        dispatch(wishListAction.addItems(item.id))
        dispatch(bagItemsAction.deleteItems(item.id))
        setModalActive(!modalActive)
    }
    return (
        <main>
        <div className="bag-item-container">
        <div className="item-left-part">
            <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
            <div className="company">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
                ({item.discount_percentage}% OFF)
            </span>
            </div>
            <div className="return-period">
            <span className="return-period-days">{item.return_period} days</span>{" "}
            return available
            </div>
            <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
            </div>
        </div>
        <div className="remove-from-cart" onClick={() => toggleModal()}>
        <FaXmark />
        </div>
        </div>
        <div className={`${modalActive && "activeModal"} modal-container`}> 
        <div className="modal-box">
          <div className="infoBox">
            <div className="imgBox"><img src="" alt="" className="modalImg" ref={imgElement}/></div>
            <div className="wishlistPara">
              <div className="modalH2">Move from Bag</div>
              <div className="modalPara">Are you sure you want to move this item from bag?</div>
            </div>
          </div>
          <div className="modalBtn">
            <button className="modalRemoveBtn"  onClick={() => removeFromBag()}>Remove</button>
            <button className="modalMoveToWishlistBtn" onClick={() => moveToWishlist()}>Move To Wishlist</button>
          </div>
        <button className="modalCloseBtn" onClick={() => toggleModal()}><HiOutlineXMark /></button>
        </div>
      </div>
      </main>
    );
};
export default BagItem;
