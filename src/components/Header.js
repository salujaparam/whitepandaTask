import React from 'react'
import '../css/header.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import image from '../images/logo.png'

export const Header = () => {
    return (
        <div className="header">
            <img src={image} alt="logo" className="logo" />
            <div className="header-prof">
                <div className="notification">
                    <IoMdNotificationsOutline />
                    <div className="num">699</div>
                </div>
                <div className="profile">
                    AB
                </div>
            </div>
        </div>
    )
}
