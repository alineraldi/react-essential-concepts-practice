// 1. Contador Simples: Crie um componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Use o hook useState para manter o valor do contador. Desafio: adicione uma condição para não permitir que o valor seja menor que zero. //

import React, { useState, useEffect, Component } from "react";

class Counter extends Component {
    // 1. O estado inicial do contador é definido como 0 no construtor.
    constructor(props) {
        super(props);
        this.state = { count: 0 }; // 'count' é o valor do contador que será atualizado.
    }

    render() {
        return(
            <div>
                {/* Título explicativo sobre o contador */}
                <h2>Hey there! Check this out</h2>
                {/* Exibe o contador e seu valor */}
                <h2>The Simplest Counter On The Planet (TSCOTP)<br/> { this.state.count }</h2>

                {/* Botão de incremento: aumenta o valor do contador em 1 */}
                <button 
                    style={{ marginRight: '1rem' }} 
                    onClick={() => {
                        // Atualiza o estado do contador, aumentando o valor de 'count' em 1
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    Increment
                </button>

                {/* Botão de decremento: diminui o valor do contador em 1, mas só se o valor for maior que 0 */}
                <button 
                    onClick={() => {
                        // Condição para garantir que o contador não fique abaixo de 0
                        if (this.state.count > 0) {
                            // Atualiza o estado do contador, diminuindo o valor de 'count' em 1
                            this.setState({ count: this.state.count - 1 });
                        }
                    }}
                >
                    Decrement
                </button>
            </div>
        );
    }
}

export default Counter