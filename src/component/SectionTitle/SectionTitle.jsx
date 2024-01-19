const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="xl:w-2/4 md:w-1/2 mx-auto text-center mb-12 w-full">
            <h4 className="text-[#D99904] mt-20 mb-4 text-xl italic">------{subTitle}------</h4>
            <h1 className="text-4xl py-2 border md:text-nowrap border-t-black border-b-black">{title}</h1>
        </div>
    );
};

export default SectionTitle;