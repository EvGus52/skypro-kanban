import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  HeaderPopUserSet,
} from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const userMenuRef = useRef(null);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleExitClick = () => {
    setIsUserMenuOpen(false); // Закрываем меню при клике на "Выйти"
  };

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <HeaderContainer className="center">
      <HeaderBlock>
        <HeaderLogo className={isDarkMode ? "_dark" : "_light"}>
          <a href="" target="_self">
            <img
              src={isDarkMode ? "/images/logo_dark.png" : "/images/logo.png"}
              alt="logo"
            />
          </a>
        </HeaderLogo>
        <HeaderNav>
          <HeaderBtnMainNew id="btnMainNew">
            <Link to="/card/new">Создать новую задачу</Link>
          </HeaderBtnMainNew>
          <div ref={userMenuRef} style={{ position: "relative" }}>
            <HeaderUser
              className="_hover02"
              href="#user-set-target"
              onClick={toggleUserMenu}
            >
              {user?.name || "Пользователь"}
            </HeaderUser>
            <HeaderPopUserSet
              className="pop-user-set"
              id="user-set-target"
              style={{ display: isUserMenuOpen ? "block" : "none" }}
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">
                {user?.name || "Пользователь"}
              </p>
              <p className="pop-user-set__mail">
                {user?.login || "email@example.com"}
              </p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
              </div>
              <button
                type="button"
                className="_hover03"
                onClick={handleExitClick}
              >
                <a href="#popExit">Выйти</a>
              </button>
            </HeaderPopUserSet>
          </div>
        </HeaderNav>
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
