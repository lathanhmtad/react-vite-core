import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
    const [todoList, setTodoList] = useState([
        {id: 1, name: 'Learning React'},
        {id: 2, name: 'Watching youtube'},
    ])

    const a = 'Eric'
    const age = 25
    const data = {
        address: 'ha noi',
        country: 'vietnam'
    }

    const addNewTodo = (name) => {
        alert(`call me ${name}`)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                name={a}
                age={age}
                data={data}
                todoList={todoList}
            />
            <div className='todo-image'>
                <img src={reactLogo} className='logo' />
            </div>
        </div>
    )
}
export default App
