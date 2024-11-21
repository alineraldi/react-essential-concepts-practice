<img src="https://i.postimg.cc/3N9NpJX4/capturadetela.png" alt="screencap"/>

# The Possibilities App 
<img src="https://github.com/user-attachments/assets/e5bee5b0-f040-4f37-ab86-9da54cc640f4" alt="logo" width="50"/>


**Bem-vindo ao The Possibilities App!**  
Este é um projeto desenvolvido no curso Dev.Fullstack Jr. da +prati e Codifica, para explorar diferentes funcionalidades e práticas no React, utilizando hooks como `useState` e `useEffect`. A aplicação reúne 10 atividades independentes que demonstram como criar componentes interativos e dinâmicos com React.

## 📋 Atividades

Cada atividade aborda um conceito ou funcionalidade específica no React. Na página inicial, você encontrará um menu para acessar cada atividade individualmente, utilizando o **React Router DOM** para navegação.

### 1. **Contador Simples 🧮**
- **Descrição:** Um contador com botões para incrementar e decrementar o valor.
- **Destaque:** Não permite valores menores que zero.
- **Conceitos usados:** `useState`.

---

### 2. **Alteração de Cor de Fundo 🔴🟠🟡🟢🔵**
- **Descrição:** Clique no botão e veja a mágica acontecer com a mudança de cor do fundo.
- **Destaque:** As cores são geradas aleatoriamente.
- **Conceitos usados:** `useState`, `useEffect`.

---

### 3. **Lista de Tarefas ✅**
- **Descrição:** Adicione, remova e marque tarefas como concluídas.
- **Destaque:** Filtra tarefas pendentes ou concluídas.
- **Conceitos usados:** `useState`, manipulação de listas.

---

### 4. **Temporizador ⏲️**
- **Descrição:** Um temporizador que conta em segundos.
- **Destaque:** Botões para pausar e reiniciar o temporizador.
- **Conceitos usados:** `useState`, `useEffect`.

---

### 5. **Filtro de Lista 📜**
- **Descrição:** Filtre uma lista de nomes enquanto digita no campo de busca.
- **Destaque:** Ignora maiúsculas e minúsculas.
- **Conceitos usados:** `useState`.

---

### 6. **Formulário de Registro Simples 📝✍**
- **Descrição:** Preencha o formulário e receba uma mensagem de boas-vindas.
- **Destaque:** Validação de campos obrigatórios.
- **Conceitos usados:** `useState`, validação de formulários.

---

### 7. **Aplicação de Requisição de Dados Simples 🖥️**
- **Descrição:** Exibe posts de uma API pública.
- **Destaque:** Indicador de carregamento e botão para recarregar dados.
- **Conceitos usados:** `useEffect`, manipulação de APIs.

---

### 8. **Galeria de Imagens com Visualização Detalhada 🐦‍⬛ **
- **Descrição:** Navegue pelas imagens e visualize-as ampliadas em um modal.
- **Destaque:** Navegação entre imagens e botão para fechar o modal.
- **Conceitos usados:** `useState`.

---

### 9. **Timer com Intervalo e Alerta 💣**
- **Descrição:** Um timer de contagem regressiva configurável.
- **Destaque:** Alerta ao final da contagem e botões para pausar/reiniciar.
- **Conceitos usados:** `useState`, `useEffect`.

---

### 10. **Componentes com Tabs Navegáveis 🪐**
- **Descrição:** Interface com abas para exibir diferentes conteúdos.
- **Destaque:** Efeito visual na aba ativa.
- **Conceitos usados:** `useState`.

  # ☄️ Instalação e Execução

1. **Clone o repositório:**

   Abra o terminal e execute o seguinte comando para clonar este repositório:
   ```bash
   git clone https://github.com/seu-usuario/the-possibilities-app.git

   
2. **Navegue até o diretório do projeto:**

   ```
   cd project
    ```
   
3. **Instale as dependências necessárias:**

   ```
   npm install
   npm install react-router-dom
    ```

4. **Inicie o servidor de desenvolvimento:**

   ```
    npm run dev
    ```

## 🛠 Estrutura do Projeto

```plaintext
project
├── node_modules
├── public
│   ├── icon-house.png
│   └── icons-universe.png
├── src
│   ├── assets
│   │   └── img
│   │       └── explosion.jpg
│   ├── components
│   │   ├── BackgroundColorChanger.jsx
│   │   ├── Counter.jsx
│   │   ├── Home.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── NameFilter.jsx
│   │   ├── PostList.jsx
│   │   ├── SignUpForm.jsx
│   │   ├── Tabs.jsx
│   │   ├── Timer.jsx
│   │   ├── TimerIntervalAlert.jsx
│   │   └── ToDoList.jsx
│   ├── styles
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── README.md

components/: Cada pasta contém os componentes relacionados a uma atividade.
styles/: Estilos globais ou específicos para componentes.
App.jsx: Página principal que serve como menu de navegação.
```
