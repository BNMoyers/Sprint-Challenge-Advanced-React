import React, { useState } from 'react';
import DarkModeHook from '../Hooks/DarkModeHook';

 const TitleBar = () =>{
    const [darkMode, setDarkMode] = DarkModeHook(false);
    const toggleMode = event =>{
        event.preventDefault();
        setDarkMode(!darkMode);
    } ;
    return(
         <nav className='navbar'>
             <h1>Most Popular Women's World Cup Players</h1>
                <div className='dark-mode-toggle'>
                    <div onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'} />
                </div>
         </nav>
     )
 }


 export default TitleBar