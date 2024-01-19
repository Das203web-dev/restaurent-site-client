// import Button from "../../Button/Button";
import PropTypes from 'prop-types'; // ES6


const MenuItemCard = ({ popularItem }) => {
    const { name, recipe, image, price } = popularItem;
    return (
        <div className="flex gap-5 md:flex-row flex-col border shadow-sm shadow-slate-300 p-3 hover:shadow-lg">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className=" w-24" src={image} alt="" />
            <div>
                <h2 className="text-xl font-medium">{name}-------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500 font-medium text-lg">${price}</p>
        </div>
    );
};
MenuItemCard.propTypes = {
    popularItem: PropTypes.object
}

export default MenuItemCard;