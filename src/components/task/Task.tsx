import styles from "./task.module.css";
import { useState, type ChangeEvent } from "react";
import tasks from "../../assets/tasks.json" with { type: "json" };

type Status = "Не решено" | "Решено верно" | "Решено неверно";

const Task = () => {
  const [currentTaskId, setCurrentTaskId] = useState<number>(0);
  const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>("Не решено");
  const [userAnswer, setUserAnswer] = useState<string>("");

  const title = tasks[currentTaskId].title;
  const answer = tasks[currentTaskId].answer;

  const nulifyParams = () => {
    setIsAnswerShown(false);
    setStatus("Не решено");
    setUserAnswer("");
  };

  const handleDecreaseId = (id: number) => {
    if (id > 0) {
      setCurrentTaskId(id - 1);
    } else {
      setCurrentTaskId(tasks.length - 1);
    }
    nulifyParams();
  };

  const handleIncreaseId = (id: number) => {
    if (id < tasks.length - 1) {
      setCurrentTaskId(id + 1);
    } else {
      setCurrentTaskId(0);
    }
    nulifyParams();
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
          <h4 className={styles.heading}>{title}</h4>
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
              Ответить
            </button>
            <button
              className={styles.show_answer}
              onClick={() => setIsAnswerShown(!isAnswerShown)}
            >
              {isAnswerShown ? "Скрыть решение" : "Показать решение"}
            </button>
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
          {isAnswerShown && (
            <div className={styles.ai}>
              <h4>Решение:</h4>
              <div className={styles.ai_solve}>
                <img src={tasks[currentTaskId].solve_img} alt="" />
              </div>
            </div>
          )}

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
