import React from 'react';
import MenuItemCard from '../../Shared/MenuItems/MenuItemCard/MenuItemCard';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import Cover from '../../Shared/Cover/Cover';
import PropTypes from 'prop-types'; // ES6


const Menus = ({ menuItems, img, title, details }) => {
    return (
        <div>
            <Cover img={img} title={title} details={details}></Cover>
            <div className="lg:grid-cols-2 grid gap-5 md:w-3/4 md:mx-auto mx-5">
                {
                    menuItems.map(menuItem => <MenuItemCard key={menuItem._id} popularItem={menuItem}></MenuItemCard>)
                }
            </div>
            <Link to={`/order/${title}`}><Button btnText={'ORDER YOUR FAVOURITE FOOD'}></Button></Link>
        </div>
    );
};

Menus.propTypes = {
    menuItems: PropTypes.array,
    img: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string
}

export default Menus;