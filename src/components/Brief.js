import React, { Fragment } from 'react'
import '../css/brief.css'

export const Brief = () => {
    return (
        <Fragment>
            <h1 className="brief-header">
                Content Store
            </h1>
            <div className="brief-section">
            <div className="brief">
                <h5>
                    Got buld orders or almost similar orders ? Fill the order brief in an excel sheet
                </h5>
                <p>
                    If you're wondering about an easy way to place orders in large numbers, we provide a way customized just for that.<br />
                    Download our excel sheet, and fill the order brief in the format and submit. In case you need any help, <a href="">we<br/> 
                    are just a click away to assist to you in placing your order.</a>
                </p>
                <button className="button">Order via Excel Sheet</button>
            </div>
            </div>
        </Fragment>
    )
}
