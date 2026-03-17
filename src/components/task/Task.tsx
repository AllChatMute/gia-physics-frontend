import styles from "./task.module.css";
import { useState, type ChangeEvent } from "react";
import tasks from "../../assets/tasks.json" with { type: "json" };
import { Link } from "react-router";

type Status = "Не решено" | "Решено верно" | "Решено неверно";

const Task = () => {
  const [currentTaskId, setCurrentTaskId] = useState<number>(0);
  const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);
  const [wrongAnswersCnt, setWrongAnswersCnt] = useState<number>(0);
  const [status, setStatus] = useState<Status>("Не решено");
  const [userAnswer, setUserAnswer] = useState<string>("");

  const title = tasks[currentTaskId].title;
  const answer = tasks[currentTaskId].answer;

  const nulifyParams = () => {
    setIsAnswerShown(false);
    setStatus("Не решено");
    setUserAnswer("");
    setWrongAnswersCnt(0);
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
      setWrongAnswersCnt(2);
      setStatus("Решено верно");
    } else {
      setStatus("Решено неверно");
      if (wrongAnswersCnt < 2) {
        setWrongAnswersCnt(wrongAnswersCnt + 1);
      }
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
              disabled={wrongAnswersCnt != 2}
              onClick={() => setIsAnswerShown(!isAnswerShown)}
            >
              {wrongAnswersCnt == 2
                ? isAnswerShown
                  ? "Скрыть решение"
                  : "Показать решение"
                : `До доступа к решению ${2 - wrongAnswersCnt} попыт${wrongAnswersCnt == 1 ? "ка" : "ки"}`}
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
              <h4>
                Для вопросов по решению и полному обьяснению от ИИ:{" "}
                <a href="https://alice.yandex.ru/" target="_blank">
                  {" "}
                  Яндекс Алиса ИИ
                </a>
              </h4>
              <h4>
                Составление промпта для решения задачи:{" "}
                <Link to="/prompt">Руководство</Link>
              </h4>
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
