import React, { useState } from 'react';
import Search from './Search';
import MainHeader from '../Components/MainHeader';
import "./MainNavigation.css";
import NavScroll from './NavScroll';


const MainNavigation = () => {
  // const [list,setList] = useState(items)
  return <MainHeader>
      <div className='navbar-all'>
        <div className='navbar'>
          <div className='navbar-logo-items'>
            <h1 className='navbar-logo'>
              <a href={"#"}>US</a>
            </h1>
            <Search />
          </div>
          <ul className='navbar-menu'>
            <li>
              Advertise
            </li>
            <li>
              Blog
            </li>
            <li>
              Login
            </li>
          </ul>
        </div>
        <div className='navbarsec'>
          <ul className='navbarsec-menu'>
            <li className='active'>
              Explore
            </li>
          </ul>
         <span/>
         <NavScroll/>
        </div>
      </div>

    </MainHeader>
}

export default MainNavigation;