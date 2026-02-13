import styles from "./header.module.css";

const Header = () => {
  const logined = true;
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className="wrapper">
            <div className={styles.logo}>
              <div className="svg-wrapper">
                <img className={styles.img} src="/earth.svg" alt="" />
              </div>
              <h3 className={styles.logo_name}>gia-physics</h3>
            </div>
            <nav className={styles.navbar}>
              <a href="#" className={styles.navbar_link}>
                Конспекты
              </a>
              <a href="#" className={styles.navbar_link}>
                Чат с ИИ
              </a>
              <a href="#" className={styles.navbar_link}>
                Задачи
              </a>
            </nav>
            <div className="header_profile">
              {logined && (
                <div className="svg-wrapper">
                  <img className={styles.img} src="/user.png" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
