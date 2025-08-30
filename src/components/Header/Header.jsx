import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  HeaderPopUserSet,
} from "./Header.styled";

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderContainer className="center">
      <HeaderBlock>
        <HeaderLogo className="_show _light">
          <a href="" target="_self">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </HeaderLogo>
        <HeaderLogo className="_dark">
          <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
        </HeaderLogo>
        <HeaderNav>
          <HeaderBtnMainNew className="_hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </HeaderBtnMainNew>
          <HeaderUser
            className="_hover02"
            href="#user-set-target"
            onClick={toggleUserMenu}
          >
            Ivan Ivanov
          </HeaderUser>
          <HeaderPopUserSet
            id="user-set-target"
            style={{ display: isUserMenuOpen ? "block" : "none" }}
          >
            {/* <a href="">x</a> */}
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
              <p>Темная тема</p>
              <input type="checkbox" className="checkbox" name="checkbox" />
            </div>
            <button type="button" className="_hover03">
              <a href="#popExit">Выйти</a>
            </button>
          </HeaderPopUserSet>
        </HeaderNav>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
