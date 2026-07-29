import React, { useState } from 'react'

const Registration = () => {
    const [value, setValue] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        })
    const handleForm = (e) => {
        const { name, value } = e.target
        setValue((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="firstName"></label>
                <input type="text" name="firstName" id="firstName" placeholder='firtName' value={value.firstName} onChange={handleForm} />

                <label htmlFor="lastName"></label>
                <input type="text" name="lastName" id="lastName" placeholder='lastName' value={value.lastName} onChange={handleForm} />

                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder='email' value={value.email} onChange={handleForm} />

                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder='Password' value={value.password} onChange={handleForm} />

                <button type='submit'>Submit</button>
            </form>
            <p>{value.firstName}</p>
            <p>{value.lastName}</p>
            <p>{value.email}</p>
            <p>{value.password}</p>
        </>
    )
}

export default Registration;