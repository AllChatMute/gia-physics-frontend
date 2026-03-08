import styles from "./task.module.css";
import { useState, type ChangeEvent } from "react";

type Status = "Не решено" | "Решено верно" | "Решено неверно";

const Task = () => {
  const [currentTaskId, setCurrentTaskId] = useState<number>(0);
  const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("18");
  const [status, setStatus] = useState<Status>("Не решено");
  const [userAnswer, setUserAnswer] = useState<string>("");

  const handleDecreaseId = (id: number) => {
    if (id > 0) {
      setCurrentTaskId(id - 1);
    }
  };

  const handleIncreaseId = (id: number) => {
    if (id < 4) {
      setCurrentTaskId(id + 1);
    }
  };

  const handleSubmitAnswer = (value: string) => {
    if (value == "") {
      return;
    } else if (value == answer) {
      setStatus("Решено верно");
    } else {
      setStatus("Решено неверно");
    }
  };

  const handleChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  return (
    <>
      <div className="container">
        <main className={styles.task}>
          <h4 className={styles.heading}>
            Ласточка летит со скоростью 36 км/ч. Какой путь она преодолеет за
            0,5 ч?
          </h4>
          <span className={styles.span}>Введите ответ:</span>
          <input
            type="text"
            className={styles.input}
            value={userAnswer}
            onChange={handleChangeAnswer}
          />
          <div className={styles.buttons}>
            <button
              className={styles.complete}
              onClick={() => handleSubmitAnswer(userAnswer)}
            >
              Подтвердить
            </button>
            <button
              className={styles.show_answer}
              onClick={() => setIsAnswerShown(!isAnswerShown)}
            >
              {isAnswerShown ? "Скрыть ответ" : "Показать ответ"}
            </button>
            <span className={styles.answer}>{isAnswerShown && answer}</span>
          </div>
          <span
            className={
              status == "Решено верно"
                ? styles.right
                : status == "Решено неверно"
                  ? styles.wrong
                  : styles.neutral
            }
          >
            {status}
          </span>

          <div className={styles.nav_buttons}>
            <button onClick={() => handleDecreaseId(currentTaskId)}>
              {"< назад"}
            </button>
            <button onClick={() => handleIncreaseId(currentTaskId)}>
              {"далее >"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Task;
