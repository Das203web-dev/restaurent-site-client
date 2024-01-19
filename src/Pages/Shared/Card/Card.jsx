import Button from "../Button/Button";

const Card = ({ img, cardTitle, description }) => {
    return (
        <div className="card w-full rounded-none bg-base-100 shadow-md hover:shadow-xl">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-none" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">{cardTitle}</h2>
                <p>{description}</p>
                <div className="card-actions text-[#BB8506]">
                    <Button className="text-[#BB8506]" btnText={'Add to cart'}></Button>
                </div>
            </div>
        </div>
    );
};

export default Card;