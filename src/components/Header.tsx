const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wrapper">
            <div className="header_logo">
              <div className="svg-wrapper">
                <img className="header_img" src="/public/earth.svg" alt="" />
              </div>
              <h1 className="header_logo_name">gia-physics</h1>
            </div>
            <nav className="header_navbar">
              <a href="#" className="header_navbar_link">
                Конспекты
              </a>
              <a href="#" className="header_navbar_link">
                Чат с ИИ
              </a>
              <a href="#" className="header_navbar_link">
                Задачи
              </a>
            </nav>
            <div className="header_profile">
              <div className="svg-wrapper">
                <img className="header_img" src="/public/user.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
