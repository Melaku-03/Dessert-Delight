import React, { useContext } from 'react';
import Main from '../../components/Main/Main';
import Order from '../../components/Order/Order';
import Confirm from '../../components/Confirm/Confirm';
import { DataContext } from "../../context/DataContext";

function Home() {
  const { isConfirmed } = useContext(DataContext);
  return (
    <div className='relative'>
      <div className='bg-rose-50 grid lg:grid-cols-3  py-6 px-28 mx-auto gap-10'>
        <Main />
        <Order />
      </div>
      { isConfirmed ? <Confirm /> : <></> }
    </div>
  )
}

export default Home;
