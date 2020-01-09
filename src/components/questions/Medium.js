import React, { useState } from "react";
import { Link } from "react-router-dom";
import questions from "./data/mediumQuestions";
import Timer from "../Timer";

const Medium = () => {
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [isEnd, setIsEnd] = useState(false);
    const [correctAnsCount, setCorrectAnsCount] = useState(0);
    const [ReportText, setReportText] = useState(null);


    const changeQuestion = () => {
        if (count == 4) {
            switch (correctAnsCount) {
                case 5:
                    setReportText('Very Strong');
                    break;
                case 4:
                    setReportText('Strong');
                    break;
                case 3:
                    setReportText('Good');
                    break;
                case 2:
                    setReportText('Bad');
                    break;
                case 1:
                    setReportText('Poor');
                    break;
            }
            setIsEnd(true);
        }
        if (questions[count].ans == answer) {
            setCorrectAnsCount(correctAnsCount + 1);
        }
        const newCount = count + 1;
        setCount(newCount);
        setSelectedQuestions([...selectedQuestions, answer]);
    };

    const handleAnswer = (ans) => {
        setAnswer(ans);
    };

    if (isEnd) {
        return (
            <>
                <h3>You scored {correctAnsCount} out of 5 🔖</h3>
                <h1>Your general knowledge is <span style={{ color: '#492088' }}>{ReportText}</span></h1>
                <Link to="/" style={{ textDecoration: 'none' }}><span className="homeBtn">Home</span></Link>
            </>
        )
    } else {
        return (
            <div>
                <Timer ans={questions[count].ans} />
                <h2>{questions[count].title}</h2>
                <ul>
                    {questions[count].options.map((ans, index) => (
                        <label className="container" onClick={() => handleAnswer(ans)} key={ans}>{ans}
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    ))};
                </ul>
                <button onClick={changeQuestion}>Next</button>
            </div>
        );
    }
};

export default Medium;