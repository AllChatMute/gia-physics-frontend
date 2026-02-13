import styles from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <>
      <div className="register">
        <form action="#" method="post" className="form">
          <label htmlFor="" className="label">
            Введите email:
          </label>
          <input type="email" className="input" id="email" />

          <label htmlFor="" className="label">
            Введите имя:
          </label>
          <input type="text" className="input" id="name" />

          <label htmlFor="" className="label">
            Введите пароль:
          </label>
          <input type="password" className="input" id="password" />

          <label htmlFor="" className="label">
            Повторите пароль:
          </label>
          <input type="password" className="input" id="password-repeat" />

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
