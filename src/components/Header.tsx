import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div className='flex items-center justify-around p-4 text-black w-full '>
            <Button children="CamTho" className='bg-yellow-500 hover:bg-yellow-600'/>
            <div className='flex space-x-4 items-center'>
                <a href="">Home</a>
                <a href="">Course</a>
                <a href="">Admission</a>
                <a href="">About</a>
                <a href="">Contact Us</a>
                <Button children="Book Now" className="bg-white border border-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600" />
            </div>
        </div>
    );
};

export default Header;