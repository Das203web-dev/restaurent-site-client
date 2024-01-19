import Button from '../../Shared/Button/Button';

const OrderCard = ({ food }) => {
    const { name, recipe, image, price } = food;

    return (
        <div className="card rounded-none w-full bg-base-100 shadow-md hover:shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl ">{name}</h2>
                <p className='font-thin capitalize'>{recipe}</p>
                <p className='bg-black bg-opacity-70 p-2 text-white absolute right-2 top-2'>${price}</p>
                <Button btnText={'add to cart'}></Button>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div> */}
            </div>
        </div>
    );
};

export default OrderCard;