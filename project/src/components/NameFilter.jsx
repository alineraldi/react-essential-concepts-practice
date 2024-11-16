// 5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro. Desafio: ignore maiúsculas e minúsculas ao filtrar.

import { useState, useEffect } from "react";

function NameFilter() {
    const [names, setNames] = useState([]);
    const [filteredNames, setFilteredNames] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNames = async () => {
            setIsLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setNames(data);
            setFilteredNames(data);
            setIsLoading(false);
        };

        fetchNames();
    }, []);

    const handleNameInput = (event) => {
        const input = event.target.value.toLowerCase();
        setSearchInput(input);

        const filtered = names.filter((personName) =>
            personName.name.toLowerCase().includes(input)
        );

        setFilteredNames(filtered);
    };

    return (
        <div>
            <h1>Find a specific person</h1>
            <br />
            {isLoading ? (
                <p>Loading names...</p>
            ) : (
                <>
                    <input 
                    type="text"
                    value={searchInput}
                    onChange={handleNameInput}
                    placeholder="Who are you looking for?"
                />

                <ul style={{ listStyleType: 'none'}}>
                    {filteredNames.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </>
            )}
        </div>
    )
}

export default NameFilter