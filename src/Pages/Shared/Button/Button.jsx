import { Link } from "react-router-dom";

const Button = ({ btnText }) => {
    return (
        <div className="flex justify-center my-5">
            <button className="btn btn-outline border-0 hover:text-[#BB8506] border-b-2 uppercase">{btnText}</button>
        </div>
    );
};

export default Button;