// 6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas. Desafio: adicione validações para garantir que todos os campos estejam preenchidos antes de enviar.

import { useState } from "react";

function SignUpForm() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [registrySuccess, setRegistrySuccess] = useState(false);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const isValid = userData.name && userData.email && userData.password;
        if (!isValid) {
            setRegistrySuccess(false);
            setMessage("Please, fill out all fields.");
        } else {
            setRegistrySuccess(true);
            setMessage('');
        }
    };

    function WelcomeMessage({ name }) {
        return (
            <div>
                <h2>Welcome, {name}</h2>
            </div>
        );
    }

    return (
        registrySuccess ? (
            <WelcomeMessage name={userData.name} />
        ) : (
            <form onSubmit={handleSignUp}>
                <h1>Sign up</h1>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <br />
                {message && <p>{message}</p>}
                <br />
                <button type="submit">Sign Up</button>
            </form>
        )
    );
}

export default SignUpForm;
