import React from 'react';

const Footer = () => {
    return (
        <div className='bg-yellow-400 w-full justify-center'>
            
       
        <div className='bg-yellow-400 w-full flex justify-around items-center p-4 text-black'>
            <div className='flex flex-col w-1/4'>
                <p className='font-bold'>Skill</p>
                <p className='text-sm'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex flex-col '>
                <p className='font-bold'>Out Link’s</p>
                <a href="">Home</a>
                <a href="">Course</a>
                <a href="">Admission</a>
                <a href="">About</a>
                <a href="">Contact Us</a>
            </div>
            <div className='flex flex-col '>
                <p className='font-bold'>What We Offer</p>
                <a href="">Math</a>
                <a href="">Science</a>
            </div>
            <div className='flex flex-col '>
                <p className='font-bold'> Gat In Touch</p>
                <a href="">1232555555</a>
                <a href="">compny name @gmail.com</a>
                <a href="">Writing</a>
               
        </div>
        </div >
            <p className='text-center text-sm text-gray-500'>skill © 2024 all right reserve</p>
         </div>
    );
};

export default Footer;