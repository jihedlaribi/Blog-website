import React from 'react'
import './topbar.css'
export const TopBar = () => {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i class="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg'  src='https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1' alt=''/>
            <i className="topSearchIcon  fa-solid fa-magnifying-glass"></i>
        </div>
    
    
    
    
    
    </div>
  )
}
