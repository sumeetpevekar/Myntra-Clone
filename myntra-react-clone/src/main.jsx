import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { Provider } from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { myntraStore } from './store'
import Bag from './routes/Bag'
import PostList from './routes/PostList'
import WishList from './routes/WishList'
const router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children : [
      {
        path : "/",
        element: <PostList></PostList>
      },
      {
        path: "/bag",
        element : <Bag></Bag>
      },
      {
        path: "/wishlist",
        element : <WishList></WishList>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
