import React from "react";
import Button from "../Button/Button";
import "./Header.css";
import { UseTelegram } from "../../hooks/useTelegram";
const Header = () => {

  const onClose = () => {
    const {tg, user, onClose} = UseTelegram();
  };
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;