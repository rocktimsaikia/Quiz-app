import React, { useState, useEffect } from "react";

const Timer = ({ ans }) => {
    const [timerCount, setTimerCount] = useState(60);

    useEffect(() => {
        if (timerCount == 0) return;

        const intervalId = setInterval(() => {
            setTimerCount(timerCount - 1)
        }, 1000);

        return () => clearInterval(intervalId)
    }, [timerCount]);

    if (timerCount === 0) {
        return (
            <h3 className="answer">Answer: {ans}</h3>
        )
    } else {
        return (
            <>
                <h3 className="answer">Timer {timerCount} ⏳</h3>
            </>
        )
    }
};

export default Timer