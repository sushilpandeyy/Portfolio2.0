import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Connect from './component/Connect.jsx'
import View from './component/View.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { inject } from '@vercel/analytics';

inject();

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Layout/>}/>
      <Route path='connect' element={<Connect/>}/>
      <Route path='view' element={<View/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
)
