import React, { useContext } from 'react'
import { icons } from '../../assets/data';
import OrderCard from '../OrderCard/OrderCard';
import { DataContext } from '../../context/DataContext';

function Order() {
    const { cartItems, data, deleteFormCart, setIsConfirmed, getTotalAmount } = useContext(DataContext);
    let totalQuantity = 0;
    const cartItem = Object.values(cartItems);
    for (let i = 0; i < cartItem.length; i++) {
        totalQuantity += cartItem[i];
    }
    return (
        <div className='flex justify-end lg:justify-center'>
            <div className='md:col-span-1 bg-white px-5 py-8 rounded-lg h-fit'>
                <h1 className='text-red font-bold text-3xl pb-3'>Your Cart ({totalQuantity})</h1>
                {totalQuantity ?
                    <>
                        {
                            data?.map(item => {
                                if (cartItems[item.id] > 0) {
                                    return (<OrderCard item={item} key={item.id} cartItems={cartItems} quant={Object.values(cartItems)} deleteFormCart={deleteFormCart} />)
                                }
                            })
                        }
                        <div className='flex justify-between py-6'>
                            <p>Order Total</p>
                            <h1 className='font-bold text-xl'>${getTotalAmount()}{String(getTotalAmount()).includes('.') ? '0' : '.00'}</h1>
                        </div>

                        <div className='flex justify-center items-center bg-rose-50 p-4 rounded-lg gap-1'>
                            <img src={icons.carbon} alt="carbon" />
                            <p className='text-sm'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
                        </div>

                        <button className='btn' onClick={() => setIsConfirmed(true)}>Confirm Order</button>

                    </>
                    :
                    <>
                        <div className='flex justify-center py-10'>
                            <img src={icons.empty} alt="" />
                        </div>
                        <p className='text-rose-500 text-center'>Your added items will appear here</p>

                    </>}
            </div>
        </div>
    )
}

export default Order;
