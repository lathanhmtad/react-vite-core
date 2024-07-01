const TodoData = (props) => {
    const { todoList, deleteTodo } = props

    console.log(todoList)

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div key={item.id} className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <button style={{cursor: "pointer"}} onClick={() => deleteTodo(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData