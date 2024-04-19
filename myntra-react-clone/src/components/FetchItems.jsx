import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/Items";
import { fetchAction } from "../store/fetchSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        if(fetchStatus.fetchDone) return ;
        dispatch(fetchAction.markFetchingStarted())
        fetch("http://localhost:8080/items",{
            method : "GET",
        })
        .then(res => res.json())
        .then(({items}) => {
            console.log(items)
            dispatch(fetchAction.markFetchDone ())
            dispatch(fetchAction.markFetchingFinished())
            dispatch(itemsAction.addInitialItems(items))
        }) 
    }, [fetchStatus])
    return (
        <>
        </>
    )
}
export default FetchItems;