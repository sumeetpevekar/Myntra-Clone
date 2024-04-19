import { useDispatch, useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const PostList = () => {
    const items = useSelector((store) => store.items)
    return (
        <>
            <main>
                <div className="items-container">
                    {items.map((items, index) => <HomeItem item={items} key={index}></HomeItem>)}
                </div>
            </main>
        </>
    )   
}
export default PostList;