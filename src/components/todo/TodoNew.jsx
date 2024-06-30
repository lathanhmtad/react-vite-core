import { useState } from "react";

const TodoNew = (props) => {

    // useState hook
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")
    
    const { addNewTodo } = props

    // addNewTodo("duy")

    const handleClick = () => {
        // alert("Click me")
        console.log(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input
                onChange={(e) => handleOnChange(e.target.value)}
                type="text" />
            <button
                onClick={handleClick}
                style={{ cursor: 'pointer' }}>Add</button>
            <div>
                My text input = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew