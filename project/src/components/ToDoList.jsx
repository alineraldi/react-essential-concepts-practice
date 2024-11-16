// 3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.

import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
        if (newTask.trim() === "") {
            return;
        }

        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>Tasks List</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Type a new task here!"
            />

            <br />
            <br />

            <button onClick={handleAddTask}>Add task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList