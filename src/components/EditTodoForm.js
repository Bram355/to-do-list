import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
     editTodo(value, faTasks.id)
    setValue("")
      
    }
  
  return (
    <form className='Todo-form' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value}
        placeholder='Update Task?' onChange=
        {(e)=>setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Update Task
            
        </button>

    </form>
  )
}

export default TodoForm