// 5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro. Desafio: ignore maiúsculas e minúsculas ao filtrar.

import { useState, useEffect } from "react";

function NameFilter() {
    // Estados para armazenar os nomes, os nomes filtrados, o valor do campo de busca e o estado de carregamento
    const [names, setNames] = useState([]); // Lista de todos os nomes
    const [filteredNames, setFilteredNames] = useState([]); // Lista de nomes filtrados
    const [searchInput, setSearchInput] = useState(''); // Valor do campo de busca
    const [isLoading, setIsLoading] = useState(true); // Estado que indica se os dados ainda estão sendo carregados

    // useEffect para buscar os dados da API e atualizar os estados
    useEffect(() => {
        const fetchNames = async () => {
            setIsLoading(true); // Inicia o carregamento
            // Fazendo a requisição para a API (aqui estamos usando um link fictício como exemplo)
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json(); // Processa os dados JSON da resposta
            setNames(data); // Atualiza o estado com a lista completa de nomes
            setFilteredNames(data); // Inicialmente, exibe todos os nomes
            setIsLoading(false); // Define que o carregamento foi concluído
        };

        fetchNames(); // Chama a função para buscar os nomes
    }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez após a montagem do componente

    // Função que lida com a alteração do valor do campo de busca
    const handleNameInput = (event) => {
        const input = event.target.value.toLowerCase(); // Converte o texto digitado para minúsculas
        setSearchInput(input); // Atualiza o valor do campo de busca

        // Filtra os nomes com base no valor digitado no campo de busca
        const filtered = names.filter((personName) =>
            personName.name.toLowerCase().includes(input) // Ignora maiúsculas e minúsculas ao comparar
        );

        setFilteredNames(filtered); // Atualiza os nomes filtrados
    };

    return (
        <div style={{ margin: 'auto', width: '30rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1>Find a specific person</h1>
            {isLoading ? ( // Exibe uma mensagem de carregamento enquanto os dados são obtidos
                <p>Loading names...</p>
            ) : (
                <>
                    {/* Campo de entrada para digitar o nome */}
                    <input 
                        style= {{padding: '10px', textAlign: 'center' }}
                        type="text"
                        value={searchInput} // Vincula o valor do input ao estado searchInput
                        onChange={handleNameInput} // Chama a função handleNameInput quando o valor do campo mudar
                        placeholder="Who are you looking for?"
                    />

                    {/* Lista de nomes filtrados */}
                    <ul>
                        {filteredNames.map(user => (
                            <li style={{ listStyleType: 'none'}} key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default NameFilter;
