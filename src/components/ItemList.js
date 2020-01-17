import React from 'react'
import '../css/itemlist.css'
import items from '../constants/items'
import img from '../images/download.jfif'

const ItemList = () => {
    return (
        <section className="services">
            <div className="center">
                {
                    items.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <div className="serv">
                                    <img src={img} alt={item.name} className="crop" />
                                    <div className="item-headers">
                                        <h4 className="head-four">{item.name}</h4>
                                        <h3>from {item.price}</h3>
                                    </div>
                                </div>
                                <p>{item.text}</p>
                                <button>Order</button>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ItemList