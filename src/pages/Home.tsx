import { useEffect, useRef, useState } from "react"
import { Container, Input, BtnAddTodo, AddNewTodo, ListTodo, ListItemTodo } from './styles'
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from "react-icons/ai";

interface Todo {
  id: number;
  title: string | undefined; // pode ser um ou pode ser outro
  completed: boolean;
}

function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  


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

  function deleteTodo(todo: Todo) {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  function handleDeleteTodo(todo: Todo) {
    deleteTodo(todo)
  }

  function updateTodo(todo: Todo) {
    setTodos(todos.map(item => item.id === todo.id ? todo : item))
  }

  function handleToggleCompleted(todo: Todo) {
    const newTodo = {...todo, completed: !todo.completed}
    updateTodo(newTodo)
  }

  //TodoApp 
  //  FormTodo
  //  ListTodo
  //    ListItemTodo
  //criar um arquivo chamado button e dentro dele export function deleteBxutton, updateButton, addButton

  return (
    <Container>
      <h1>Todo List Project</h1>
      <AddNewTodo>
        <Input ref={tituloRef} type='text' id="inputText" placeholder='Insira a nova tarefa' />
        <BtnAddTodo onClick={handleAddTodo}>+</BtnAddTodo>
      </AddNewTodo>
      <ListTodo>
        {todos.map((item) =>
          <ListItemTodo key={item.id} isCompleted={item.completed}>
            {item.title}
            <div>
              <button onClick={() => handleToggleCompleted(item)}><AiOutlineCheck color="#F4FFFD" /></button>
              <button onClick={() => handleDeleteTodo(item) }><FaTrash color="#F4FFFD" /></button>

            </div>
          </ListItemTodo>
        )}
      </ListTodo>
    </Container>
  )
}

export default Home