import React from "react";
import { Link } from "react-router-dom";

const PopUser = () => (
  <div className="header__pop-user-set pop-user-set" id="user-set-target">
    {/* <a href="">x</a> */}
    <p className="pop-user-set__name">Ivan Ivanov</p>
    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
    <div className="pop-user-set__theme">
      <p>Темная тема</p>
      <input type="checkbox" className="checkbox" name="checkbox" />
    </div>
    <button type="button" className="_hover03">
      <Link to="/exit">Выйти</Link>
    </button>
  </div>
);

export default PopUser;
