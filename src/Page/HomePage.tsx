import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
const HomePage = () => {
    return (
        <div className='flex flex-col min-h-screen space-y-4'>
            <Header/>
            <ContactUs/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;