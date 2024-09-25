import logo from "../../public/images/ArtDriveColorLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center pr-5 pl-5 h-[60px] fixed bg-green-800">
            <Link to='/'>
                <img src={logo} alt="logo" width={100} height={100} />
            </Link>
            <div className="flex gap-4">
                <Link to="/" className="bg-emerald-400 rounded-3xl p-2">Main Page</Link>
                <Link to="/generate" className="bg-emerald-400 rounded-3xl p-2">Generate</Link>
            </div>
            
        </div>
    );
};

export default Navbar;
