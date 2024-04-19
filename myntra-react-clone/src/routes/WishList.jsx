import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const WishList = () => {
    const storeItems = useSelector(store => store.items)
    const wishlist = useSelector(store => store.wishlist)
    const items = storeItems.filter(item => {
        const finalItems = wishlist.indexOf(item.id);
        return finalItems >= 0;
    })
    console.log(items)
    return (
        <main>
        <div className="items-container">
            {items.length == 0 ?  <h3>Your wishlist have 0 items</h3>:
            items.map((item, index) => <WishlistItem key={index} item={item}></WishlistItem>)
        }
        </div>
    </main>
           
    )
}
export default WishList;