import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (
        <div className='mb-24'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="Our Menu"
                strength={-200}
            >
                <div className="hero h-[600px]" style={{ backgroundImage: `${img}` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center md:px-10 py-14 md:w-2/3 bg-black text-white bg-opacity-40 w-10/12">
                        <div className="w-full">
                            <h1 className="mb-5 md:text-7xl text-4xl font-bold uppercase">{title}</h1>
                            {details ? <p className="mb-5 text-xl text-wrap">{details}</p> : ""}
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;