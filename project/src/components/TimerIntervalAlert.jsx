// 9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou. Desafio: Adicione botões para pausar e reiniciar o timer.

import { useState, useEffect } from "react";

function TimerIntervalAlert() {
    const[userInput, setUserInput] = useState("")
    const[seconds, setSeconds] = useState(0);
    const[isRunning, setIsRunning] = useState(false);
    const[intervalId, setIntervalId] = useState(null);

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const startTimer = () => {
        if(seconds === 0 || isRunning) return;
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    alert("bang!!!!!!");
                    return 0;
                }
                return prev -1
            })
        }, 1000);

        setIntervalId(interval);
        setIsRunning(true)
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setSeconds(0);
        setIsRunning(false);
        setUserInput("");
    }

    const handleInputSubmit = () => {
        const timeInSeconds = parseInt(userInput) || 0;
        setSeconds(timeInSeconds);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [isRunning])

    return (
        <div>
            <h4>Welcome to the Simple Time Bomb: <i>Where you can safely detonate a bomb 😊</i></h4>
                <input
                    type="number"
                    name="timer"
                    onChange={handleChange}
                    value={userInput}
                    placeholder="Enter time in seconds"
                />
            <br />
            <br />
            <button onClick={handleInputSubmit}>Set timer</button>
            <br />
            <h1>{seconds} seconds</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default TimerIntervalAlert
