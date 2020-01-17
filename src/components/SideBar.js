import React from 'react'
import {FaHamburger, FaBuromobelexperte, FaSearch} from 'react-icons/fa'
import '../css/sidebar.css'

export const SideBar = () => {
    return (
        <div className="sidebar">
            <FaBuromobelexperte className="item active" />
            <FaSearch className="item"/>
            <FaHamburger className="item"/>
        </div>
    )
}
