// 2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
// Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. Desafio: gere cores aleatórias sempre que o botão for clicado.

import React, { useState, useEffect } from "react";

function BackgroundColorChanger() {
    const [color, setColor] = useState('#FFFFFF');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div>
            <button onClick={() => setColor(getRandomColor())}>Click me to change the background color!</button>
        </div>
    );
}

export default BackgroundColorChanger;