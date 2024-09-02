import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext';

function OrderCard({ item, cartItems, deleteFormCart }) {
    const { icons } = useContext(DataContext);
    const totalPrice = item.price * cartItems[item.id];
    const price = item.price;
    return (
        <div>
            <div className='flex w-full border-b-2 border-gray-200 justify-between items-center pt-3'>
                <div className='pb-2'>
                    <h1 className='font-semibold text-lg pb-1'>{item.name}</h1>
                    <div className='flex gap-2'>
                        <span className='text-red font-bold'>{cartItems[item.id]}x</span>
                        <p className='text-gray-500 flex gap-3'>@ ${price}{String(price).includes('.') ? '0 ' : '.00 '}
                            <span className='text-rose-500'>
                                ${totalPrice}{String(totalPrice).includes('.') ? '0 ' : '.00 '}
                            </span>
                        </p>
                    </div>
                </div>
                <img src={icons.remove} alt="" className='icon-circle-1' onClick={() => deleteFormCart(item.id)} />
            </div>
        </div>
    )
}

export default OrderCard;
