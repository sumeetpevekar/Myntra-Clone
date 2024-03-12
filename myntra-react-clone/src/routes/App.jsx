import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeItem from "../components/HomeItem"
import { Outlet } from "react-router-dom"
import Home from "./Home"
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const fetchStatus = useSelector(store => store.fetchStatus)
  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.fetchDone ? <Outlet></Outlet> : <LoadingSpinner></LoadingSpinner>}
      <Footer></Footer>
    </>
  )
}

export default App;
