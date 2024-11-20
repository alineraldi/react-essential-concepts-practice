// 7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts obtidos de uma API pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao carregar o componente e exiba os posts em uma lista. Desafio: adicione um botão para recarregar os dados e um indicador de carregamento enquanto a requisição está sendo feita.

import { useState, useEffect } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch(error) {
            console.error("There was an error while loading: ", error)
        } finally {
            setIsLoading(false)
        };
    };

    
    useEffect(() => {
        fetchPosts();
    }, []);

    const handleReload = () => {
        fetchPosts();
    }


    return(
        <div>
            <h1>Posts List</h1>
            <button class="main-btns" onClick={handleReload}>Reload</button>

            {isLoading ? (
                <p>Loading posts...</p>
            ): (
                <>
                <ul style={{ listStyleType: 'none', margin: 'auto', width: '50%', textAlign: 'left'}}>
                    {posts.map((post) => (
                        <li style={{ marginTop: '2rem' }} key={post.id}>
                            <strong>{post.title}</strong>
                            <p style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{post.body}</p>
                        </li>
                    ))}
                </ul>                
                </>
            )}

        </div>
    )
}

export default PostList