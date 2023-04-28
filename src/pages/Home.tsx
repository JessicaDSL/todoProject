import { useEffect, useRef, useState } from "react"


interface Todo {
  id: number;
  title: string | undefined; // pode ser um ou pode ser outro
  completed: boolean;
}

function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const tituloRef = useRef<HTMLInputElement>(null);


  //clique => handleTodo => AddTodo
  function handleAddTodo() {
    const todo = {
      id: Math.random() * 1000,
      title: tituloRef?.current?.value || '',
      completed: false
    }
    addTodo(todo)
    clearInputTodo();
  }

  function isValid(todo: Todo): boolean {
    return todo.title != '' || todo.completed === false
  }

  function addTodo(todo: Todo) {
    if (isValid(todo)) {
      setTodos([...todos, todo])
    }
  }

  function clearInputTodo() {
    tituloRef.current!.value = ''
  }

  function handleDeleteTodo(item: Todo) {
    setTodos(todos.filter(todo => todo.id !== item.id)) //criar um novo 
  }

  function handleEditTodo(item: Todo) {
    console.log(item.id);

  }

  function handleToggleCompleted(item: Todo) {
    item.completed == true ? item.completed = false : item.completed = true
  }

  console.log(todos);
  return (
    <div>
      <h1>Todo List Project</h1>
      <input ref={tituloRef} type='text' id="inputText" placeholder='Insira a nova tarefa' />
      <button onClick={handleAddTodo}>+</button>
      <ul>
        {todos.map((item) =>
          <li key={item.id}>
            <button onClick={() => handleToggleCompleted(item)}>OK!</button>
            {item.title}
            <button onClick={() => handleEditTodo(item)}>EDIT</button>
            <button onClick={() => handleDeleteTodo(item)}>DELETE</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home