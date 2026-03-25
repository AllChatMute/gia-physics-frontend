import { Link } from "react-router";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className="wrapper">
            <Link to="/">
              <div className={styles.logo}>
                <div className="svg-wrapper">
                  <img className={styles.img} src="/earth.svg" alt="" />
                </div>
                <h3 className={styles.logo_name}>gia-physics</h3>
              </div>
            </Link>

            <nav className={styles.navbar}>
              <Link to="/notes" className={styles.navbar_link}>
                Конспекты
              </Link>
              <Link to="/tasks" className={styles.navbar_link}>
                Задачи
              </Link>
              <Link to="/prompt" className={styles.navbar_link}>
                Руководство по использованию ИИ
              </Link>
            </nav>
            <div className="header_profile"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
