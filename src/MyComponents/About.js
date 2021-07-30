import React from 'react'
let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
    background: "linear-gradient(#40ff00,#8cff66)",
    width:"500px"
}
export const About = () => {
    return (
        <div className="container" style={myStyle}>
            <h3>About</h3>
            <p>This is a Todo Single Page Application made using components of React Framework.<br/>
            React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual 
            developers and companies. React can be used as a base in the development of single-page or mobile applications<br/>
            <ul>This application offers the following functional
                <li>You can add a Task to the list.</li>
                <li>You can delete the task whenever you want.</li>
                <li>Your Todo list remains unchanged untill you change it.</li>
            </ul>
            </p>
        </div>
    )
}
