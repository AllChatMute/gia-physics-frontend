import styles from "./task.module.css";

const Task = () => {
  return (
    <>
      <div className="container">
        <main className={styles.task}>
          <h4 className={styles.heading}>
            Ласточка летит со скоростью 36 км/ч. Какой путь она преодолеет за
            0,5 ч?
          </h4>
          <span className={styles.span}>Введите ответ:</span>
          <input type="text" className={styles.input} />
          <div className={styles.buttons}>
            <button className={styles.complete}>Подтвердить</button>
            <button className={styles.show_answer}>Показать ответ</button>
            <span className={styles.answer}></span>
          </div>
          <div className={styles.nav_buttons}>
            <button>{"< назад"}</button>
            <button>{"далее >"}</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Task;
