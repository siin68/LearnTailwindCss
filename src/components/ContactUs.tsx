import Button from './Button';
import Input from './Input';

const ContactUs = () => {
    return (
        <div className='flex p-8 m-[100px] justify-between gap-5'>
            <div className='flex flex-col gap-4 w-1/2'>
                <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Subject" />
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" type="email" />
                </div>
                <div className='flex flex-col gap-4'>
                    <Input placeholder='Your Message' />
                    <Button children='Submit' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 gap-4'>
                <h1 className='text-2xl'>Contact Us</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export default ContactUs;