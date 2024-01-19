import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            // pagination={{
            //     clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper my-10 md:w-3/4 w-full"
        >
            <SwiperSlide className='relative'>
                <img className='w-full' src={img1} alt="" />
                <h2 className='uppercase text-2xl text-center absolute bottom-0 transition -translate-x-1/2 text-white font-semibold bg-black bg-opacity-30 w-full py-4 left-1/2'>Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src={img2} alt="" />
                <h2 className='uppercase text-2xl text-center absolute bottom-0 transition -translate-x-1/2 text-white font-semibold bg-black bg-opacity-30 w-full py-4 left-1/2'>soups</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src={img3} alt="" />
                <h2 className='uppercase text-2xl text-center absolute bottom-0 transition -translate-x-1/2 text-white font-semibold bg-black bg-opacity-30 w-full py-4 left-1/2'>pizzas</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src={img4} alt="" />
                <h2 className='uppercase text-2xl text-center absolute bottom-0 transition -translate-x-1/2 text-white font-semibold bg-black bg-opacity-30 w-full py-4 left-1/2'>deserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src={img5} alt="" />
                <h2 className='uppercase text-2xl text-center absolute bottom-0 transition -translate-x-1/2 text-white font-semibold bg-black bg-opacity-30 w-full py-4 left-1/2'>Salads</h2>
            </SwiperSlide>

        </Swiper>
    );
};

export default Category;