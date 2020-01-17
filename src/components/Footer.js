import React from 'react'
import '../css/footer.css'
import links from '../constants/links'
import socialIcons from '../constants/icons'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                {socialIcons.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className="copyright">
                copyright &copy; {new Date().getFullYear()} White Panda Media Pvt. Ltd.<br />
                All rights reserved
            </div>
            <div className="linkss">
                {links.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer