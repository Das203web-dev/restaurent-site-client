import React from 'react';
import Cover from '../Shared/Cover/Cover';
import shopImg from '../../assets/shop/banner2.jpg'

const OurShop = () => {

    return (
        <div className='h-screen relative'>
            <Cover img={shopImg} title={'our shop'}></Cover>
        </div>
    );
};

export default OurShop;