const TodoData = (props) => {
    // props là một object {}

    // destructuring object
    const { name, age, data, todoList } = props
    // const name = props.name
    // const age = props.age
    // const data = props.data

    console.log(todoList)

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <button>Delete</button>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData