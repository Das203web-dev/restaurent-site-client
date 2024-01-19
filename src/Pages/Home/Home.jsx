import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
import slide1 from '../../assets/home/01.jpg';
import slide2 from '../../assets/home/02.jpg';
import slide3 from '../../assets/home/03.png';
import slide4 from '../../assets/home/04.jpg';
import slide5 from '../../assets/home/05.png';
import slide6 from '../../assets/home/06.png';
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import Category from "./Category/Category";
import MenuItems from "../Shared/MenuItems/MenuItems";
import { useEffect, useState } from "react";
import Card from "../Shared/Card/Card";
import Paralax from "./Paralax/Paralax";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setChefData(data.filter(d => d.category === 'offered')))
    }, [])
    return (
        <div>
            <Helmet>
                <title className="uppercase">BISTRO BOSS | HOME</title>
            </Helmet>
            {/* <h1 className="text-6xl">This is home</h1> */}
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
                <div>
                    <img src={slide4} />
                </div>
                <div>
                    <img src={slide5} />
                </div>
                <div>
                    <img src={slide6} />
                </div>
            </Carousel>
            <section className="my-28 mx-5">
                <SectionTitle title={"ORDER ONLINE"} subTitle={"From 11:00am to 10:00pm"}></SectionTitle>
                <Category></Category>
            </section>
            <section className="bistro mb-28">
                <div className="mx-auto bg-white w-3/4 md:p-20 p-5 md:my-40 my-10 opacity-90">
                    <h1 className="uppercase text-5xl">Bistro Boss</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eveniet dolorum ipsum earum quas fugit numquam autem, possimus laboriosam, sit tempore eaque ut veniam tempora nesciunt nihil quia sunt soluta!</p>
                </div>
            </section>
            <section className="mx-5">
                <SectionTitle title={'FROM OUR MENU'} subTitle={"check it out"}></SectionTitle>
                <MenuItems></MenuItems>
            </section>
            <div className="mb-28 text-white bg-[#3f2121e3] p-10 text-center text-3xl uppercase">
                <h3>Call Us: +88 0192345678910</h3>
            </div>
            <section className="mb-28 mx-5">
                <SectionTitle title={'CHEF RECOMMENDS'} subTitle={'Should Try'}></SectionTitle>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:w-3/4 md:mx-auto mt-12">
                    {
                        chefData.map(data => <Card key={data._id} img={data.image} cardTitle={data.name} description={data.recipe}></Card>)
                    }
                </div>
            </section>
            <Paralax></Paralax>
            <Testimonials></Testimonials>

        </div >
    );
};

export default Home;