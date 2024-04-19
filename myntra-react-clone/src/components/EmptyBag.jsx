import { Link } from "react-router-dom";

const EmptyBag = () => {
    return (
        <div className="empty-container">
            <div className="emptyCard">
                <div className="emptyCardImg">
                    <img src="images/empty-bag.webp" alt="" />
                </div>
                <div class="emptyCart-heading">Hey, it feels so light!</div>
                <div className="emptyCartPara">There is nothing in your bag. Let's add some items.</div>
                <Link to="/wishlist">
                <button className="emptyCartBtn">add items from wishlist</button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyBag;