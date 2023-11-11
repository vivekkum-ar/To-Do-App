import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage.tsx';
import Home from './pages/Home.tsx';
import Completed from './pages/Completed.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/completed" element={<Completed/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
  ,
)
