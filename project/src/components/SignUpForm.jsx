// 6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas. Desafio: adicione validações para garantir que todos os campos estejam preenchidos antes de enviar.

import { useState } from "react";

function SignUpForm() {
    // Estados que armazenam os dados do formulário e o status da inscrição
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState(''); // Mensagem de erro ou sucesso
    const [registrySuccess, setRegistrySuccess] = useState(false); // Flag para verificar se o registro foi bem-sucedido

    // Função para atualizar os dados do formulário com base no que o usuário digitar
    const handleChange = (event) => {
        // Atualiza o estado do formulário, mantendo os valores existentes e alterando apenas o campo específico
        setUserData({
            ...userData,
            [event.target.name]: event.target.value, // O nome do campo é usado para atualizar o valor correto
        });
    };

    // Função para lidar com a submissão do formulário
    const handleSignUp = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário (que é recarregar a página)
        
        // Verifica se todos os campos do formulário foram preenchidos
        const isValid = userData.name && userData.email && userData.password;
        
        if (!isValid) {
            // Se algum campo estiver vazio, mostra mensagem de erro e define o sucesso do registro como falso
            setRegistrySuccess(false);
            setMessage("Please, fill out all fields.");
        } else {
            // Se todos os campos forem válidos, o registro é bem-sucedido
            setRegistrySuccess(true);
            setMessage(''); // Limpa a mensagem de erro
        }
    };

    // Componente condicional que exibe uma mensagem de boas-vindas após o registro bem-sucedido
    function WelcomeMessage({ name }) {
        return (
            <div>
                <h2>Ah... {name}! What a beautiful name. Welcome.</h2>
            </div>
        );
    }

    return (
        // Renderiza a mensagem de boas-vindas ou o formulário de inscrição, dependendo do estado de sucesso
        registrySuccess ? (
            <WelcomeMessage name={userData.name} /> // Se o registro for bem-sucedido, exibe a mensagem de boas-vindas
        ) : (
            // Se o registro não for bem-sucedido, exibe o formulário de inscrição
            <form 
                style={{ margin: 'auto', maxWidth: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} 
                onSubmit={handleSignUp}
            >
                <h1>Sign up</h1>

                <label htmlFor="name">Name: </label>
                <input
                    style={{ padding: '1rem', fontSize: '1rem' }}
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange} // Chama handleChange ao digitar
                />
                <br />

                <label htmlFor="email">E-mail: </label>
                <input
                    style={{ padding: '1rem', fontSize: '1rem' }}
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange} // Chama handleChange ao digitar
                />
                <br />

                <label htmlFor="password">Password: </label>
                <input
                    style={{ padding: '1rem', fontSize: '1rem' }}
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange} // Chama handleChange ao digitar
                />
                
                {message && <p>{message}</p>} {/* Exibe a mensagem de erro, se houver */}
                <button style={{ marginTop: '1rem' }} type="submit">Sign Up</button>
            </form>
        )
    );
}

export default SignUpForm;
