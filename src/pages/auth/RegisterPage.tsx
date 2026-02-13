import styles from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className={styles.register}>
            <form action="#" method="post" className={styles.form}>
              <h1>Регистрация</h1>
              <label htmlFor="" className={styles.label}>
                Введите email:
              </label>
              <input type="email" className={styles.input} id="email" />

              <label htmlFor="e" className={styles.label}>
                Введите имя:
              </label>
              <input type="text" className={styles.input} id="name" />

              <label htmlFor="" className={styles.label}>
                Введите пароль:
              </label>
              <input type="password" className={styles.input} id="password" />

              <label htmlFor="" className={styles.label}>
                Повторите пароль:
              </label>
              <input
                type="password"
                className={styles.input}
                id="password-repeat"
              />

              <button type="submit" className={styles.submit}>
                Зарегистрироваться
              </button>
              <span className={styles.login}>
                Уже есть аккаунт? <a href="#">Войти</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
