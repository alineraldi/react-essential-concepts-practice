// 9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou. Desafio: Adicione botões para pausar e reiniciar o timer.

import { useState, useEffect } from "react";

function TimerIntervalAlert() {
    // Estado para armazenar a entrada do usuário (tempo em segundos)
    const [userInput, setUserInput] = useState("");
    // Estado para controlar os segundos do timer
    const [seconds, setSeconds] = useState(0);
    // Estado para verificar se o timer está em execução
    const [isRunning, setIsRunning] = useState(false);
    // Estado para armazenar o ID do intervalo do setInterval (para poder limpar depois)
    const [intervalId, setIntervalId] = useState(null);

    // Função para atualizar o estado do input do usuário (quando ele digitar o tempo)
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    // Função para iniciar o timer
    const startTimer = () => {
        // Se o tempo é zero ou se o timer já está rodando, não faz nada
        if (seconds === 0 || isRunning) return;

        // Inicia o intervalo que diminui os segundos a cada segundo (1000 ms)
        const interval = setInterval(() => {
            // Atualiza os segundos e verifica se deve parar o timer
            setSeconds((prev) => {
                // Quando o tempo chega a zero, limpa o intervalo e mostra o alerta
                if (prev <= 1) {
                    clearInterval(interval);
                    alert("💥💥bang!!!!!!💥💥"); // Alerta quando o timer chega a zero
                    return 0;
                }
                // Caso contrário, apenas decrementa o tempo
                return prev - 1;
            });
        }, 1000);

        // Armazena o ID do intervalo para poder limpá-lo depois
        setIntervalId(interval);
        // Marca o timer como iniciado
        setIsRunning(true);
    };

    // Função para pausar o timer
    const pauseTimer = () => {
        setIsRunning(false);
    };

    // Função para resetar o timer (limpa o intervalo, zera o tempo e reinicia o estado)
    const resetTimer = () => {
        clearInterval(intervalId); // Limpa o intervalo do timer
        setSeconds(0); // Reseta o contador de segundos
        setIsRunning(false); // Marca o timer como não iniciado
        setUserInput(""); // Limpa a entrada do usuário
    };

    // Função para lidar com o envio do input (quando o usuário define o tempo)
    const handleInputSubmit = () => {
        // Converte a entrada do usuário em segundos, ou 0 se for um valor inválido
        const timeInSeconds = parseInt(userInput) || 0;
        setSeconds(timeInSeconds); // Atualiza o estado dos segundos com o tempo inserido
    };

    // Hook useEffect para limpar o intervalo quando o componente for desmontado ou o timer parar
    useEffect(() => {
        // Limpa o intervalo se o componente for desmontado ou quando o timer parar
        return () => clearInterval(intervalId);
    }, [isRunning]); // O efeito será acionado sempre que o estado isRunning mudar

    return (
        <div style={{ textAlign: "center", marginTop: '1rem' }}>
            <h3>Welcome to the Simple Bomb Lounge: Where you can safely detonate a complete harmless bomb 😊</h3>
            <input
                style={{ padding: '1.5rem', fontSize: '2rem' }}
                type="number"
                name="timer"
                onChange={handleChange} // Atualiza o valor do input
                value={userInput} // Exibe o valor do input
                placeholder="Enter time in seconds"
            />
            <button
                id="bomb-timer-setter"
                style={{ marginLeft: '1rem', padding: '1.5rem', fontSize: '2rem', marginTop: '1rem' }}
                onClick={handleInputSubmit} // Define o tempo a partir do input do usuário
            >
                Set timer
            </button>
            <br />
            <h1 id="bomb-timer">{seconds} seconds</h1>
            <button id="bomb-start" style={{ marginRight: '1rem' }} onClick={startTimer}>Start</button>
            <button className="bomb-btns" style={{ marginRight: '1rem' }} onClick={pauseTimer}>Pause</button>
            <button className="bomb-btns" onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default TimerIntervalAlert;
