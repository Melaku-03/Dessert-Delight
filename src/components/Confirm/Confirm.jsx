import React, { useContext } from 'react';
import { DataContext } from "../../context/DataContext";

function Confirm() {
  const { icons, data, cartItems, setIsConfirmed, setCartItems, getTotalAmount } = useContext(DataContext);
  const reset = () => {
    setIsConfirmed(false);
    setCartItems({});
  }
  return (
    <div className='confirm absolute top-0 w-full h-full flex  justify-center' >
      <div className='bg-white p-6 rounded-lg h-fit mt-32 w-full md:w-2/3 '>
        <img src={icons.order} alt="order" />
        <div className='py-6'>
          <h1 className='font-bold text-3xl '>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className='bg-rose-50 rounded-lg p-3'>
          {
            data?.map(item => {
              if (cartItems[item.id] > 0) {
                return (
                  <div className='border-b-2 py-2 flex items-center gap-2 lg:gap-5 ' key={item.id}>
                    <img src={item.image.thumbnail} alt="thumbnail" className='w-12 md:w-16 rounded-lg' />
                    <div className='flex items-center justify-between w-full'>
                      <div>
                        <h1 className='font-semibold text-xs lg:text-xl'>{item.name}</h1>
                        <div className='flex gap-3'>
                          <span className='font-bold text-red'>{cartItems[item.id]}x</span>
                          <p>${item.price}{String(item.price).includes('.') ? '0 ' : '.00 '}</p>
                        </div>
                      </div>
                      <p className='font-semibold'>${item.price * cartItems[item.id]}{String(item.price * cartItems[item.id]).includes('.') ? '0 ' : '.00 '}</p>
                    </div>
                  </div>
                )
              }
            })
          }
          <div className='flex justify-between py-3'>
            <p>Order Total</p>
            <span className='font-bold text-lg'>${getTotalAmount()}{String(getTotalAmount()).includes('.') ? '0' : '.00'}</span>
          </div>
        </div>
        <button className='btn' onClick={reset}>Start New Order</button>
      </div>
    </div>
  )
}

export default Confirm;
