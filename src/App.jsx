import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'

const App = () => {
    const a = 'Eric'
    const age = 25
    const data = {
        address: 'ha noi',
        country: 'vietnam'
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew />
            <TodoData
                name={a}
                age={age}
                data={data}
            />
            <div className='todo-image'>
                <img src={reactLogo} className='logo' />
            </div>
        </div>
    )
}
export default App
