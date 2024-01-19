import { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import PropTypes from 'prop-types';


const OrderTab = ({ items }) => {

    const [currentProducts, setCurrentProducts] = useState([])

    console.log(currentProducts)
    const [currentPage, setCurrentPage] = useState(0)
    const count = items.length;
    const itemPerPage = 6;
    const pageControl = Math.ceil(count / itemPerPage);
    let pagination = [];
    for (let i = 1 - 1; i < pageControl; i++) {
        pagination.push(i)

    }

    useEffect(() => {
        const startIdx = currentPage * itemPerPage;
        const endIdx = startIdx + itemPerPage;
        const productsToDisplay = items.slice(startIdx, endIdx);
        setCurrentProducts(productsToDisplay);
    }, [currentPage, items, itemPerPage]);
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {
                    currentProducts.map(item => <OrderCard key={item._id} food={item}></OrderCard>)
                }
            </div>
            <div className='my-5 flex justify-center flex-row gap-2'>
                {items.length > itemPerPage &&
                    pagination.map(pageControl => <button
                        onClick={() => setCurrentPage(pageControl)}
                        key={pageControl}
                        className={`btn border-0 border-b-2 btn-outline uppercase rounded-full hover:bg-transparent hover:text-black ${currentPage === pageControl && "bg-[#BB8506] text-black"}`}
                    >
                        {pageControl + 1}
                    </button>)
                }
            </div>
        </div>
    );
};



OrderTab.propTypes = {
    items: PropTypes.array
}

export default OrderTab;