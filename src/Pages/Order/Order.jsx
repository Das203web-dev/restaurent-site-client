import Cover from "../Shared/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHooks from "../../hooks/useHooks";
import { useEffect, useState } from "react";
import OrderCard from "./OrderCard/OrderCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    console.log('category is', category)
    const categoryIndex = categories.indexOf(category);
    const [popularItems] = useHooks();
    const [tabIndex, setTabIndex] = useState(categoryIndex);
    const todaysOffer = popularItems.filter(item => item.category === 'offered');
    const desserts = popularItems.filter(item => item.category === 'dessert');
    const pizzas = popularItems.filter(item => item.category === 'pizza');
    const salads = popularItems.filter(item => item.category === 'salad');
    const soups = popularItems.filter(item => item.category === 'soup');
    const drinks = popularItems.filter(item => item.category === 'drinks');

    useEffect(() => {
        if (categoryIndex === -1) {
            setTabIndex(0)
        }
    }, [categoryIndex]);

    return (

        <div>
            <Helmet>
                <title>BISTRO BOSS | ORDER</title>
            </Helmet>
            <Cover img={orderImg} title={'your order'} details={'Would you like to try a dish?'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='uppercase text-center font-bold md:w-3/4 md:mx-auto mx-5'>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab category={category} items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab category={category} items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab category={category} items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab category={category} items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab category={category} items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;