import styles from "./registerPage.module.css";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className={styles.register}>
            <form action="#" method="post" className={styles.form}>
              <h1>Вход</h1>
              <label htmlFor="" className={styles.label}>
                Введите email:
              </label>
              <input type="email" className={styles.input} id="email" />

              <label htmlFor="" className={styles.label}>
                Введите пароль:
              </label>
              <input type="password" className={styles.input} id="password" />

              <button type="submit" className={styles.submit}>
                Войти
              </button>
              <span className={styles.login}>
                Еще нет аккаунта? <Link to="/register">Регистрация</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
