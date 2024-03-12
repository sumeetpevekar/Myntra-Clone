import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/FetchStatusSlice";
import { itemActions } from "../store/itemsSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()
    // console.log(fetchStatus)
    useEffect(() => {
        if(fetchStatus.fetchDone) {
            return;
        }
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusActions.markFetchingStarted())
        fetch("http://localhost:8080/items", {signal})
        .then((res) => res.json())
        .then(({items}) =>{
            dispatch(fetchStatusActions.markFetchDone())
            dispatch(fetchStatusActions.markFetchingFinished())
            dispatch(itemActions.addInitialItems(items))
        });
        return () => {
            controller.abort();
        };
    }, [fetchStatus])
    return (
        <></>
    )
}
export default FetchItems;