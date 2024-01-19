import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Order from "../Pages/Order/Order";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../component/Login/Login";
import Registration from "../component/Registration/Registration";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactPage from "../Pages/ContactPage/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/ourmenu",
                element: <Contact></Contact>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'ourshop',
                element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'contactus',
                element: <ContactPage></ContactPage>
            }
        ],
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    }
]);

export default router;