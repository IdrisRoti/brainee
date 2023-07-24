import { useContext, useEffect, useState } from "react";
import "./quizpage.css";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const {
    ques,
    setScore,
    quesNo,
    setQuesNo,
    options,
    setOptions,
    setQues,
    noOfQues,
  } = useContext(DataContext);

  const [correctAns, setCorrectAns] = useState("");
  const [selected, setSelected] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setOptions(
      ques &&
        shufleOptions([
          ques[quesNo]?.correct_answer,
          ...ques[quesNo]?.incorrect_answers,
        ])
    );

    ques && setCorrectAns(ques[quesNo]?.correct_answer);
  }, [ques, quesNo]);

  const shufleOptions = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const handleSelect = (option) => {
    if (selected === option && selected === correctAns) {
      return "correct";
    } else if(selected === option && selected !== correctAns) {
      return "wrong";
    }
      else if(option === correctAns) {
        return "correct"
      }
  };

  const handleOption = (option) => {
        setSelected(option);
        if(option === correctAns) {
            setScore(prev => prev + 1)
        }
  };

  const handleNext = () => {
    if(quesNo > (noOfQues -2)) {
        navigate("/result")
        setQues();
        setQuesNo(0);
        setSelected("");
    } else if(selected !== "") {
        setQuesNo(prev => prev + 1);
        setSelected("");
    } else {
        alert("please select an answer");
        return;
    }
  };

  return (
    <div className="quizpage">
      {ques ? (
        <div className="container">
          <div className="top">
            <h2 className="quiz-cat">{ques[quesNo]?.category}</h2>
            <div className="question-block">
              <div className="ques-no">
                Question {`${quesNo + 1} / ${noOfQues}`}
              </div>
              <div className="question">{ques[quesNo]?.question}</div>
            </div>
          </div>
          <div className="bottom">
            <div className="answer-block">
              <div className="answers">
                {options &&
                  options.map((option, i) => (
                    <button
                      key={i}
                      className={`answer ${selected && handleSelect(option)}`}
                      onClick={() => handleOption(option)}
                      disabled={selected}
                    >
                      {option}
                    </button>
                  ))}
              </div>
            </div>
            <button className="next-btn" onClick={handleNext}>
              {quesNo > (noOfQues -2) ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
      <div className="load">
            <div className="loading"></div>
            <div >Loading Quiz...</div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
