import React, { useState } from 'react';
import "./NavScroll.css";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


const items = ['Wallpaper', 'Travel', 'Nature', 'Streetphotography','Textures & patterns', 'Animals', 'Fashion & beauty', 'Film', 'Food & drink', 'People', 'Sprituality']
const NavScroll = () => {
   const slideLeft = () => {
    var slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft - 500;
    
   }

   const slideRight = () =>{
    var slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft + 500;
   }

    const [navItem, setNavItems] = useState(items);
    return <div className='nav-card'>
        <MdChevronLeft onClick={slideLeft} size={40} style={{cursor:'pointer'}}/>
        <div id='slider' className='scroll'>
            {navItem.map((e) => (
                <div className='item-card'>
                    {e}
                </div>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} style={{cursor:'pointer'}}/>


    </div>
}

export default NavScroll;