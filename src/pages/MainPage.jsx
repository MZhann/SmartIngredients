import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBlock from "../components/InfoBlock";


const MainPage = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-between">
            <Navbar />
            <InfoBlock />
            
            <Footer />
        </div>
    );
};

export default MainPage;
