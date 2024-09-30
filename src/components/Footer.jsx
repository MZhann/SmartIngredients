import logo from "../../public/images/ArtDriveColorLogo.png";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div className="w-full bg-green-500 flex items-center flex-row  justify-evenly ">
            <div className="w-1/3 h-[100px] bg-green-200 flex flex-col">
                <img src={logo} alt="logo" width={90} height={90} />
                <Link to='/about' className='underline text-md font-bold'>about us</Link>
            </div>
            <div className="w-1/3 h-[100px] bg-green-300 flex flex-col">
                <p>Свяжитесь с нами:</p>
                <Link to=''>instagram</Link>
                <Link to=''>email</Link>
                <Link to=''>vk</Link>
            </div>
            <div className="w-1/3 h-[100px] bg-green-400">
                <p>На чашку кофе</p>
                <Link to='kaspi qr'>kaspi qr</Link>
            </div>
        </div>
    )
}

export default Footer;