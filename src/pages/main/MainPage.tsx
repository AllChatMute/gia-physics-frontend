import { Link } from "react-router";
import styles from "./mainPage.module.css";

const MainPage = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className={styles.pass_gia}>
            <div className="wrapper">
              <div className={styles.main_left}>
                <h1 className={styles.main_heading}>
                  Сдай ГИА по физике на 5 с ИИ-репетитором!
                </h1>
              </div>
              <div className={styles.main_right}>
                <img className={styles.main_img} src="/atom.png" alt="" />
              </div>
            </div>
          </section>
          <section className={styles.why_us}>
            <h2 className={styles.why_us_heading}>Почему стоит выбрать нас?</h2>
            <p className={styles.why_us_description}>
              Генерируем объяснения без ошибок, персональные тесты по слабым
              темам и разборы задач в реальном времени - без репетитора и
              скучных учебников
            </p>
            <button className={styles.why_us_btn}>
              <Link to="/register">Начать подготовку бесплатно</Link>
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
