import { useSelector } from "react-redux";

const BagSummary = () =>{
    const bagItemsIds = useSelector(store => store.bag)
    console.log(bagItemsIds)

    const items = useSelector(store => store.items)
    
    const finalItems = items.filter(item => {
        const itemIndex = bagItemsIds.indexOf(item.id);
        return itemIndex >= 0;
    })

    let totalItem = bagItemsIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let CONVENIENCE_FEES = 99;

    finalItems.forEach(bagItem => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
    const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  
    return (
        <>
        <div className="bag-summary">
            <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">Rs{totalMRP}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">-Rs{totalDiscount}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">Rs 99</span>
            </div>
            <hr/>
            <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">Rs {finalPayment}</span>
            </div>
            </div>
            <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
            </button>
            </div>
        </>
    )
}
export default BagSummary;