// 3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.

import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    handleAddTask = () => {
        if (newTask.trim() === "") {
            return;
        }

        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    handleRemoveTask = () => {

    }

    listTasks = () => {

    }
}

export default ToDoList