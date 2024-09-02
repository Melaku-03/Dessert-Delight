import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Card from '../Card/Card';

function Main() {
    const { data } = useContext(DataContext);
    return (
        <div className='col-span-2'>
            <h1 className='text-5xl font-bold pb-10'>Deserts</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    data?.map((item) => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Main;