import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";
const Bag = () => {
    const bagItems = useSelector(store => store.bag)
    const items = useSelector(store => store.items)
    const item = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    })
  return (
      <>
      {bagItems.length == 0 ? <EmptyBag></EmptyBag> : 
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
              {item.map((item, index) => <BagItem item={item} key={index}></BagItem>)}
          </div>
          <BagSummary item={item}></BagSummary>
        </div>
      </main>
      }
    </>
  );
};
export default Bag;