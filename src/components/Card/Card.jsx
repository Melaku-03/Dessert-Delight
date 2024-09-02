import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';

function Card({ item }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { icons, cartItems, addToCart, removeFormCart } = useContext(DataContext);
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });
    let img_typ = windowWidth <= 640 ? item.image.mobile : windowWidth <= 1024 ? item.image.tablet : item.image.desktop;

    return (
        <div>
            <div className='pb-6 '>
                <div className='relative mb-8'>
                    <img src={img_typ} tabIndex={item.id} alt="" className='h-56 rounded-lg w-full focus:border-4 focus:border-red' />
                    {
                        !cartItems[item.id] ?
                            <div className='badge' onClick={() => addToCart(item.id)}>
                                <img src={icons.add} alt="icon" />
                                <button> Add to cart</button>
                            </div> :
                            <div className='badge-1'>
                                <img src={icons.decrement} alt="decrement" className='icon-circle' onClick={() => removeFormCart(item.id)} />
                                <p>{cartItems[item.id]}</p>
                                <img src={icons.increment} alt="increment" className='icon-circle' onClick={() => addToCart(item.id)} />
                            </div>
                    }
                </div>
                <div>
                    <span className='font-light text-gray-500'>{item.category}</span>
                    <p className='font-semibold'>{item.name}</p>
                    <span className='text-red font-bold'>${item.price}{String(item.price).includes('.') ? '0' : '.00'}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;
