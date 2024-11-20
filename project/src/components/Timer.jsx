import { useState, useEffect } from 'react';

function Timer() {
    // Declara os estados necessários para o funcionamento do temporizador
    const [seconds, setSeconds] = useState(0); // Armazena o número de segundos que o timer contou
    const [isRunning, setIsRunning] = useState(false); // Controla se o timer está em execução ou pausado
    const [intervalId, setIntervalId] = useState(null); // Armazena o ID do intervalo (usado para limpar o temporizador posteriormente)

    // Função para iniciar o temporizador
    const startTimer = () => {
        // Cria um intervalo que será executado a cada 1000ms (1 segundo)
        const interval = setInterval(() => {
            // Atualiza o estado 'seconds', incrementando o valor a cada segundo
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        
        // Armazena o ID do intervalo para poder limpá-lo depois
        setIntervalId(interval);
        // Marca o timer como "em execução"
        setIsRunning(true);
    };

    // Função para pausar o temporizador
    const pauseTimer = () => {
        // Apenas altera o estado 'isRunning' para falso. O intervalo não é limpo aqui, apenas pausamos a execução
        setIsRunning(false);
    };

    // Função para resetar o temporizador
    const resetTimer = () => {
        // Limpa o intervalo ativo usando o ID do intervalo armazenado
        clearInterval(intervalId);
        // Reseta o contador de segundos para 0
        setSeconds(0);
        // Marca o timer como "não em execução"
        setIsRunning(false);
    };

    // O useEffect será executado sempre que o estado 'isRunning' mudar.
    // Isso garante que, quando o componente for desmontado ou o timer for pausado, o intervalo será limpo.
    useEffect(() => {
        // Função de limpeza do useEffect: limpa o intervalo quando o componente for desmontado ou 'isRunning' for alterado.
        return () => clearInterval(intervalId);
    }, [isRunning]); // O array de dependências faz com que o useEffect execute a limpeza apenas quando 'isRunning' mudar

    return (
        <div>
            <h1>Hello there!</h1>
            {/* Botão para iniciar o temporizador */}
            <button onClick={startTimer}>Click and notice the passing of time:</button>
            <br />
            <h3>{seconds}</h3> {/* Exibe o número de segundos */}
            {/* Botões para pausar e resetar o temporizador */}
            <button style={{ marginRight: '1rem' }} onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Timer;
