// 1. Contador Simples: Crie um componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Use o hook useState para manter o valor do contador. Desafio: adicione uma condição para não permitir que o valor seja menor que zero. //

import React, { useState, useEffect, Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        return(
            <div>
                <h2>Hey there! Check this out</h2>
                <h2>The Simplest Counter On The Planet (TSCOTP)<br/> { this.state.count }</h2>

                <button style = {{ marginRight: '1rem' }} onClick={() => {
                        this.setState({ count: this.state.count + 1});
                }}>Increment</button>

                <button onClick={() => {
                    if(this.state.count > 0) {
                        this.setState({ count: this.state.count - 1});
                    }
                }}>Decrement</button>
            </div>
        )
    }
}

export default Counter;