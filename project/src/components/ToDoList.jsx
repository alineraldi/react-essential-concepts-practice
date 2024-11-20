import { useState } from "react"; // Importa o hook useState do React

function ToDoList() {
    // Estado para armazenar a lista de tarefas
    const [tasks, setTasks] = useState([]);
    // Estado para armazenar o valor da nova tarefa que o usuário está digitando
    const [newTask, setNewTask] = useState("");

    // Função que lida com a mudança no input (quando o usuário digita algo)
    const handleInputChange = (event) => {
        setNewTask(event.target.value); // Atualiza o estado 'newTask' com o valor digitado no input
    }

    // Função para adicionar uma nova tarefa à lista de tarefas
    const handleAddTask = () => {
        // Verifica se a tarefa está vazia (apenas espaços em branco)
        if (newTask.trim() === "") {
            return; // Se a tarefa estiver vazia, não faz nada
        }

        // Atualiza o estado 'tasks' adicionando a nova tarefa
        setTasks([...tasks, newTask]);
        setNewTask(''); // Limpa o campo de input após adicionar a tarefa
    };

    // Função para remover uma tarefa da lista, com base no índice
    const handleRemoveTask = (index) => {
        // Cria uma nova lista de tarefas, excluindo a tarefa no índice especificado
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); // Atualiza o estado 'tasks' com a nova lista sem a tarefa removida
    }

    return (
        <div style={{ margin: 'auto', width: '20rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1>Tasks List</h1>
            {/* Campo de input para o usuário digitar a nova tarefa */}
            <input
                style={{ padding: '2rem' }}
                type="text"
                value={newTask} // O valor do input está vinculado ao estado 'newTask'
                onChange={handleInputChange} // A cada mudança, a função 'handleInputChange' é chamada
                placeholder="Type a new task here!" // Texto que aparece quando o campo está vazio
            />

            <br />
            <br />

            {/* Botão que adiciona a nova tarefa à lista */}
            <button onClick={handleAddTask}>Add task</button>

            {/* Lista de tarefas, onde cada tarefa é exibida */}
            <ul>
                {tasks.map((task, index) => (
                    <li style={{listStyleType: 'none' }} key={index}>
                        {task} {/* Exibe o nome da tarefa */}
                        {/* Botão para remover a tarefa */}
                        <button onClick={() => handleRemoveTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
