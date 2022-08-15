import React from "react";

const Todo = ({id, todo, handleRemove}) =>{
    const remove = () => handleRemove(id)
    return(
        <div>
            {todo}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo