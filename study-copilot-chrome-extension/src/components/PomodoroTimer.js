import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
    const [studyTarget, setStudyTarget] = useState('');
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            // Handle when Pomodoro session ends
            alert('Pomodoro session ended!');
        }
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(1500);
    };

    const handleChange = (e) => {
        setStudyTarget(e.target.value);
    };

    return (
        <div>
            <h2>Pomodoro Timer</h2>
            <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
            <div>
                <input type="text" placeholder="Enter study target" value={studyTarget} onChange={handleChange} />
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default PomodoroTimer;