import { React } from "react";
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };

const Header = (props) => {
 return(
    <div className="header">
        <Button onClick={onClose}>Close</Button>
        <span className={'username'}>
            {tg.InitDataUnsafe?.user?.username}
        </span>
    </div>
 )   
}

export default Header;