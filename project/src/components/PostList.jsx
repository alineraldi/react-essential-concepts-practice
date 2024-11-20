import { useState, useEffect } from "react";

function PostList() {
    // Declaração de estados para armazenar os dados dos posts e o status de carregamento
    const [posts, setPosts] = useState([]); // Estado para armazenar os posts recebidos
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar se os dados ainda estão sendo carregados

    // Função para realizar a requisição à API e atualizar os posts
    const fetchPosts = async () => {
        setIsLoading(true); // Inicia o indicador de carregamento ao começar a requisição
        try {
            // Realiza a requisição para a API pública JSONPlaceholder
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            // Converte a resposta em JSON
            const data = await response.json();
            // Atualiza o estado com os dados dos posts
            setPosts(data);
        } catch (error) {
            // Em caso de erro, exibe uma mensagem no console
            console.error("There was an error while loading: ", error);
        } finally {
            // Finaliza o carregamento independentemente do sucesso ou falha da requisição
            setIsLoading(false);
        }
    };

    // useEffect com dependência vazia [] para carregar os posts uma única vez quando o componente for montado
    useEffect(() => {
        fetchPosts(); // Chama a função para carregar os posts assim que o componente é montado
    }, []); // A dependência vazia significa que este efeito será executado apenas uma vez, no carregamento inicial do componente

    // Função chamada ao clicar no botão "Reload" para recarregar os posts
    const handleReload = () => {
        fetchPosts(); // Recarrega os posts chamando a função novamente
    }

    return (
        <div>
            <h1>Posts List</h1>
            {/* Botão para recarregar os dados */}
            <button className="main-btns" onClick={handleReload}>Reload</button>

            {/* Indicador de carregamento */}
            {isLoading ? (
                <p>Loading posts...</p> // Exibe uma mensagem enquanto os posts estão sendo carregados
            ) : (
                <>
                    {/* Exibe os posts quando a requisição for concluída */}
                    <ul style={{ listStyleType: 'none', margin: 'auto', width: '50%', textAlign: 'left' }}>
                        {posts.map((post) => (
                            <li style={{ marginTop: '2rem' }} key={post.id}>
                                <strong>{post.title}</strong> {/* Exibe o título do post */}
                                <p style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{post.body}</p> {/* Exibe o corpo do post */}
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
}

export default PostList;
