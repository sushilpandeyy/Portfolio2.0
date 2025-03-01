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
 
const NotFound = () => (
  <div className="max-w-3xl mx-auto my-16 p-6 text-center">
    <h1 className="text-6xl font-bold mb-6">404</h1>
    <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
    <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
      Go Home
    </a>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Layout/>}/>
      <Route path='connect' element={<Connect/>}/>
      <Route path='view' element={<View/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);