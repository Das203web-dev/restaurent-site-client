import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../component/AuthProvider/AuthProvider';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const [dropdown, setDropDown] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const handleClick = () => {
        setDropDown(false)
    }
    const handleLogOut = () => {
        logOut()
    }
    const navOptions = [
        { name: "Home", id: 1, path: '/' },
        { name: "Our Menu", id: 2, path: '/ourmenu' },
        { name: "Order", id: 3, path: '/order' },
        { name: "Our Shop", id: 4, path: '/ourshop' },
        { name: "Contact Us", id: 5, path: '/contactus' },
    ]
    // const navOptions = <>
    //     <li><a>Item 1</a></li>
    //     <li>
    //         <a>Parent</a>
    //         <ul className="p-2">
    //             <li><a>Submenu 1</a></li>
    //             <li><a>Submenu 2</a></li>
    //         </ul>
    //     </li>
    //     <li><a>Item 3</a></li>
    // </>
    return (
        <div className="navbar shadow-xl fixed z-50 max-w-[1360px] bg-opacity-80 bg-black text-white">
            <div className="flex justify-between flex-grow lg:navbar-start">
                <div className="dropdown" onClick={() => setDropDown(!dropdown)}>
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div className='w-full'>
                        <ul tabIndex={0} className={dropdown ? "menu menu-sm dropdown-content mt-[25px] z-[1] p-2 shadow-md bg-black text-white bg-opacity-80 rounded w-52" : "hidden"}>
                            {
                                navOptions.map(options => <NavLink
                                    onClick={handleClick}
                                    key={options.id}
                                    to={options.path}
                                    className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ""}
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "red" : isPending ? "" : "white",
                                        fontWeight: 700,
                                        marginBottom: "10px"
                                    })}>
                                    {options.name}
                                </NavLink>)
                            }
                            {user ? <Link to={'/'} className="navbar-end"><div>
                                <a onClick={handleLogOut} className="btn btn-outline text-white hover:bg-transparent hover:text-red-700 font-bold">Logout</a>
                            </div></Link> :
                                <Link className="navbar-end" to={'/login'}><div>
                                    <a className="btn btn-outline text-white hover:bg-transparent hover:text-red-700 font-bold">Login</a>
                                </div></Link>}
                        </ul>

                    </div>
                </div>
                <a className="uppercase flex flex-col text-xl"><span className='font-extrabold md:text-3xl text-xl'>Bistro Boss</span><span className='md:tracking-[7px] tracking-normal'>Restaurent</span></a>
                <Link to={'profile'} className='btn btn-circle btn-outline text-white md:hidden font-thin'>
                    {
                        user ? <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /> : <CgProfile className='w-8 h-8'></CgProfile>
                    }
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        navOptions.map(options => <NavLink
                            key={options.id}
                            to={options.path}
                            className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ""}
                            style={({ isActive, isPending }) => ({
                                color: isActive ? "red" : isPending ? "" : "white",
                                fontSize: "16px",
                                fontWeight: 700
                            })}>
                            {options.name}
                        </NavLink>)
                    }
                </ul>
            </div>
            {user ? <Link className="navbar-end max-[430px]:hidden">
                <div className='flex items-center justify-between flex-row-reverse gap-5'>
                    <a onClick={handleLogOut} className="btn btn-outline text-white hover:bg-transparent hover:text-red-700 font-bold">Logout</a>
                    <Link to={'profile'} className='btn btn-circle btn-outline text-white font-thin hover:text-red-700'>
                        {
                            user ? <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" /> : <CgProfile className='w-8 h-8'></CgProfile>
                        }
                    </Link>
                </div></Link> : <Link className="navbar-end max-[430px]:hidden" to={'/login'}><div>
                    <a className="btn btn-outline text-white hover:bg-transparent hover:text-red-700 font-bold">Login</a>
                </div></Link>}
        </div>
    );
};

export default Navbar;