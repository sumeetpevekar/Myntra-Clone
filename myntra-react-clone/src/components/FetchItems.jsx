import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/Items";
import { fetchAction } from "../store/fetchSlice";

const FetchItems = () => {
    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()
    const loadData = async () => {
        try{
            const res = await fetch("http://localhost:5000/api/auth/products");
            const data = await res.json();
            console.log(data);
            console.log(res)
            if(res.ok){
                dispatch(fetchAction.markFetchDone ())
                dispatch(fetchAction.markFetchingFinished())
                dispatch(itemsAction.addInitialItems(data.message))
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        if(fetchStatus.fetchDone) return ;
        dispatch(fetchAction.markFetchingStarted())
        loadData();
    }, [fetchStatus])
    return (
        <>
        </>
    )
}
export default FetchItems;
