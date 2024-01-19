import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import Button from '../../Shared/Button/Button';
import './Paraax.css'

const Paralax = () => {
    return (
        <div className=' featured-section mb-24 bg-black bg-opacity-50 text-white'>
            <div className='bg-black bg-opacity-50 py-5'>
                <SectionTitle title={'FROM OUR MENU'} subTitle={'Check it out'}></SectionTitle>
                <div className=' flex md:flex-row flex-col justify-center gap-5 items-center  lg:w-2/3 md:mx-auto mb-20 p-5'>
                    <img className='md:w-1/2 w-full' src={featuredImg} alt="" />
                    <div className='md:w-1/2 w-full font-semibold p-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore libero accusantium suscipit beatae praesentium expedita at repellendus? Saepe voluptate harum inventore rerum alias quae quam obcaecati amet incidunt. Vel, eligendi tenetur. Iusto doloribus eum ullam corporis, totam doloremque recusandae aut exercitationem mollitia, ipsam beatae! Sed, eius? Maxime, quis cupiditate?</p>
                        <div className="flex md:justify-start justify-center my-5">
                            <button className="btn uppercase text-white btn-outline border-0 hover:text-[#BB8506] border-b-2 font-bold">read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paralax;