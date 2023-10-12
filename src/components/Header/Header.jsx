import { React } from "react";
import "./Header.css";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import logo from "../../images/logo/bear.png";




const Header = () => {
const {user,onClose} = useTelegram();
 return(
<div className="header">
        <div className="div-logo">
        <img src={logo} alt="logo" className="logo" />
        <span className={'username'}>
            {user}
        </span>
        </div>
        <div className="div-btn">
        <Button onClick={onClose}>Close</Button>
        </div>
        <div className='formTitle'>
            <p>Questionnaire title</p>
        
        <div className='headerLine' />
        </div>
    </div>
    
 )   
}

export default Header;