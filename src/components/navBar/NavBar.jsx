import "./NavBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>  </Link>
                <span> My Media Social App </span>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <WidgetsOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="right">
                <AccountBoxOutlinedIcon />
                <MailOutlineOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span> Jakub Wojnowski </span>
                </div>
            </div>


        </div>
    );

}
export default NavBar