import React from 'react'
import Card from './Components/Card'
import Form from "./Components/Form"
import users from './data'

// import css
import "./App.css"
import Counter from './Components/Counter'


function App() {

    console.log("App re-rendering");


    return <div>
        <h1>Code from app component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis!</p>

        <Form />

        {/* <Counter />

        {users.map((user, i) => <Card key={i} description={user.description} email={user.email} phone={user.phone} name={user.name} />)} */}


    </div>
}

export default App