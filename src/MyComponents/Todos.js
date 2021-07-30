import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
        background: "linear-gradient(#40ff00,#8cff66)",
        width:"500px"
    }////////////////////////////////////////////////////////////
   

    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3 text-center" ><u><b>My Todos List</b></u></h3>
            {props.todos.length===0? "No Todos to display Add a task":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
