import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
    const bagItems = useSelector(store => store.bag)
    const items = useSelector(store => store.items)
    const item = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    })

    console.log(item);
    return (
        <>
            <main>
            <div className="bag-page">
            <div className="bag-items-container">
                {item.map(item => <BagItem key={item.id} item={item}></BagItem>)}
            </div>
            <BagSummary></BagSummary>
            <div className="bag-summary"></div>
            </div>
            </main>
        </>            
    )
}
export default Bag;