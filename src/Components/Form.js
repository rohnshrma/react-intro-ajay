import React, { useState } from 'react'

const Form = () => {


    const [emailText, setEmailText] = useState('')
    const [email, setEmail] = useState('')



    const changeHandler = (e) => {
        // console.log(e.target.value);
        var myEmail = e.target.value
        setEmailText(myEmail)

    }

    const submitHandler = (e) => {
        e.preventDefault()
        setEmail(emailText)
    }

    return (

        <div>
            <h2>{email}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input onChange={changeHandler} type="text" placeholder='email address :' />
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Form