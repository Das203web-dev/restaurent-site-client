// import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard/MenuItemCard";
import Button from "../Button/Button";
import useHooks from "../../../hooks/useHooks";
import { Link } from "react-router-dom";

const MenuItems = () => {
    const [popularItems] = useHooks();
    const menuItems = popularItems.filter(item => item.category === 'popular')
    return (
        <div className="my-10">

            <div className="lg:grid-cols-2 grid gap-5 md:w-3/4 md:mx-auto">
                {
                    menuItems.map(popularItem => <MenuItemCard key={popularItem._id} popularItem={popularItem}></MenuItemCard>)
                }
            </div>
            <Link to={'/ourmenu'}><Button btnText={'View Full  Menu'}></Button></Link>
        </div>
    );
};

export default MenuItems;