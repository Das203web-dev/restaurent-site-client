import Cover from "../Shared/Cover/Cover";
import bannerImg from '../../assets/home/banner.jpg';
import useHooks from "../../hooks/useHooks";
import MenuItemCard from "../Shared/MenuItems/MenuItemCard/MenuItemCard";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import Button from "../Shared/Button/Button";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
// import { Link, useParams } from "react-router-dom";
// import { useState } from "react";
import Menus from "./Menus/Menus";
// import MenuItems from "../Shared/MenuItems/MenuItems";

const Contact = () => {
    const [popularItems] = useHooks();
    const todaysOffer = popularItems.filter(item => item.category === 'offered');
    const desserts = popularItems.filter(item => item.category === 'dessert');
    const pizzas = popularItems.filter(item => item.category === 'pizza');
    const salads = popularItems.filter(item => item.category === 'salad');
    const soups = popularItems.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | MENU</title>
            </Helmet>
            <Cover img={bannerImg} title={'our menu'} details={'Would you like to try a dish?'}></Cover>
            <div className="mx-5">
                <SectionTitle title={"TODAY'S OFFER"} subTitle={"Don't miss"}></SectionTitle>
                <div className="lg:grid-cols-2 grid gap-5 md:w-3/4 md:mx-auto ">
                    {
                        todaysOffer.map(offer => <MenuItemCard key={offer._id} popularItem={offer}></MenuItemCard>)
                    }
                </div>
                <Button btnText={'ORDER YOUR FAVOURITE FOOD'}></Button>

            </div>
            <Menus menuItems={desserts} img={dessert} title={'dessert'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menus>
            <Menus menuItems={pizzas} img={pizza} title={'pizza'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menus>
            <Menus menuItems={salads} img={salad} title={'salad'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menus>
            <Menus menuItems={soups} img={soup} title={'soup'} details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Menus>
        </div>
    );
};

export default Contact;