import React, { useContext } from 'react';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import Cover from '../Shared/Cover/Cover';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Cover img={user?.photoURL} title={"your profile"}>

            </Cover>
            <div className='mx-5 text-center py-5 px-3 shadow-xl lg:w-1/4 lg:mx-auto'>
                <img className='w-14 h-14 rounded-full mx-auto flex' src={user?.photoURL} alt="" />
                <h2 className='font-bold text-xl'>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
        </div>
    );
};

export default Profile;