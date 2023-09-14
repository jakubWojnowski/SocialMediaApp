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
import {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeProvider.jsx";
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";
const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthenticationContext);
    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>  </Link>
                <span> My Media Social App </span>
                <HomeOutlinedIcon />
                {darkMode ?  <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
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
                <img src={currentUser.profilePicture} alt="" />
                    <span> {currentUser.username} </span>
                </div>
            </div>


        </div>
    );

}
export default NavBar