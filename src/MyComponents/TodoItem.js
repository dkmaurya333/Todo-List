import React from 'react'

export const TodoItem = ({todo, onDelete}) => {//////////////////////////////////////////////////////////////////////////

    return (
        <>
         
        <div className="background-linear-gradient(#40ff00,#8cff66)">
           <h3>{todo.title}</h3>
           <p>{todo.desc}</p>
        
           
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        
        </div>
        <hr/> <hr/>
        </>
    )
}
