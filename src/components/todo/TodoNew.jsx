const TodoNew = (props) => {
    console.log(props)

    const { addNewTodo } = props

    // addNewTodo("duy")

    const handleClick = () => {
        alert("Click me")
    }

    const handleOnChange = (name) => {
        console.log(name)
    }

    return (
        <div className="todo-new">
            <input
                onChange={(e) => handleOnChange(e.target.value)}
                type="text" />
            <button
                onClick={handleClick}
                style={{ cursor: 'pointer' }}>Add</button>
        </div>
    )
}

export default TodoNew