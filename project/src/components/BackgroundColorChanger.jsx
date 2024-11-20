// 2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
// Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. Desafio: gere cores aleatórias sempre que o botão for clicado.

import React, { useState, useEffect } from "react";

function BackgroundColorChanger() {
    // Estado para armazenar a cor de fundo. Começa com o valor inicial '#FFFFFF' (branco).
    const [color, setColor] = useState('#FFFFFF');

    // Função para gerar uma cor aleatória no formato hexadecimal
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';  // Todos os caracteres possíveis em um código de cor hexadecimal
        let color = '#'; // A cor começa com '#'
        
        // Loop para gerar os 6 caracteres que formam a cor hexadecimal
        for (let i = 0; i < 6; i++) {
            // Adiciona um caractere aleatório da string 'letters' à variável color
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color; // Retorna a cor gerada
    }

    // useEffect é um hook que é executado sempre que o valor de 'color' mudar.
    useEffect(() => {
        // Altera a cor de fundo da página ao atualizar o valor de 'color'
        document.body.style.backgroundColor = color;
    }, [color]); // A dependência 'color' faz com que o efeito seja executado toda vez que 'color mudar'

    return (
        <div>
            {/* Botão que, quando clicado, muda a cor de fundo */}
            <button onClick={() => setColor(getRandomColor())}>
                Click me to change the background color!
            </button>
        </div>
    );
}

export default BackgroundColorChanger;
