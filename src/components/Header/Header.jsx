import { React } from "react";
import "./Header.css";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import logo from "../../images/logo/bear.png";




const Header = () => {
const {user,onClose} = useTelegram();
 return(
    <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <span className={'username'}>
            {user}
        </span>
        <Button onClick={onClose}>Close</Button>
    </div>
 )   
}

export default Header;