import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
    
    <div className='d-flex flex-column justify-content-center'>
    <div className='d-flex fixed top-0'>
        <Navbar></Navbar>
          </div>
          <div className=''>
          <Outlet></Outlet>
          </div>
    </div>
    </>
  )
}

export default Layout