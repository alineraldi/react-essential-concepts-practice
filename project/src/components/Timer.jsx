// 4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela. Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. Desafio: adicione botões para pausar e reiniciar o temporizador.

import { useState, useEffect } from 'react';

function Timer() {

    const[seconds, setSeconds] = useState(0);
    const[isRunning, setIsRunning] = useState(false);
    const[intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000);
        setIntervalId(interval);
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setSeconds(0);
        setIsRunning(false);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [isRunning])

    return (
        <div>
            <h1>Hello there!</h1>
            <button onClick={startTimer}>Click and notice the passing of time:</button>
            <br />
            <h3>{seconds}</h3>
            <button style = {{ marginRight: '1rem'}} onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer