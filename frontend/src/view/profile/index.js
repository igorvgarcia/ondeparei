import './profile.css'
import React, {useEffect} from 'react';
import Navbar from '../../components/navbar';

function Profile() {
    const email = localStorage.getItem('email');

    return (
        <>
        <Navbar />
        <span>{email}</span>
        </>
    );
}

export default Profile;