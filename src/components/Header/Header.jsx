import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
  <header className={s.header}>
   <img src=""></img>
   <nav classname={s.nav}>
     <div className={s.navitem}><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>
     <div className={s.navitem}><NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink></div>
     <div className={s.navitem}><a href="#">Meat</a></div>
     <div className={s.navitem}><a href="#">Food</a></div>
     </nav>
 </header>
  );

}
export default Header;
