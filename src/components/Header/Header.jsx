function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <div className="header__logo _show _light">
          <a href="" target="_blank">
            <img src="public/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _show _dark">
          <a href="" target="_blank">
            <img src="public/logo_dark.png" alt="logo" />
          </a>
        </div>
        <nav className="header__nav">
          <button className="header__btn-mainNew _hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </button>
          <a href="#user-set" target="_blank">
            <div className="header__user user">
              <div className="user__id">
                <p>ID пользователя</p>
              </div>
              <div className="user__img">
                <img src="public/avatar.png" alt="avatar" />
              </div>
            </div>
          </a>
          <div className="header__popUserSet popUserSet" id="user-setTarget">
            <a href="#">x</a>
            <div className="popUserSet__name">
              <p>Имя пользователя</p>
            </div>
            <div className="popUserSet__mail">
              <p>usermail@mail.com</p>
            </div>
            <div className="popUserSet__theme">
              <p>Темная тема</p>
              <input type="checkbox" className="checkbox" name="checkbox" />
              <label htmlFor="checkbox" className="label">
                <svg
                  className="sun"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M9 1a0.5 0.5 0 0 0 0 1V1ZM7.25 1.75a0.5 0.5 0 0 0-1 0h1ZM7.25 4.25a0.5 0.5 0 0 0 1 0h-1ZM9.75 2.5a0.5 0.5 0 0 0 0-1v1ZM10 6a0.5 0.5 0 0 0-1 0h1ZM7.5 6a0.5 0.5 0 0 0-1 0h1ZM10 7.5a0.5 0.5 0 0 0-1 0h1ZM9.75 9.5a0.5 0.5 0 0 0 0-1v1ZM7.25 7.25a0.5 0.5 0 0 0-1 0h1ZM7.25 9.75a0.5 0.5 0 0 0 1 0h-1ZM4.25 7.25a0.5 0.5 0 0 0-1 0h1ZM2.5 9.75a0.5 0.5 0 0 0 0-1v1ZM1 6a0.5 0.5 0 0 0 1 0H1ZM2.5 2.5a0.5 0.5 0 0 0 0-1v1ZM4.25 4.25a0.5 0.5 0 0 0-1 0h1ZM6 1a0.5 0.5 0 0 0 0 1V1ZM6 10a0.5 0.5 0 0 0 0 1V10ZM3 6a0.5 0.5 0 0 0 1 0H3ZM6 6a0.5 0.5 0 0 0 1 0H6Z"
                      fill="#FFE6A3"
                    />
                  </g>
                </svg>
                <svg
                  className="moon"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.002 7.749c.015.307.147.599.368.822.221.223.522.354.834.364a.75.75 0 0 1 .745.648.75.75 0 0 1-.227.825 6.667 6.667 0 0 1-3.936 1.28.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75 5.156 5.156 0 0 0 3.008-1.196.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75Z"
                    fill="#FFE6A3"
                  />
                </svg>
              </label>
            </div>
            <button type="button" className="_hover03">
              <a href="#popExit">Выйти</a>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
