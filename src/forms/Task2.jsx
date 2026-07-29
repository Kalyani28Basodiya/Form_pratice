import React, { useState } from 'react'

const Task2 = () => {
    const [input, setInput] = useState(
        {
            fname: "",
            lname: ""
        }
    )
    const [fullNane, setFullNane] = useState([])

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const full = input.fname + " " + input.lname;
        setFullNane([...fullNane, full])
        setInput({ fname: "", lname: "" })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">name:</label>
                <input type="text" name='fname' placeholder='fname' onChange={handleInput} value={input.fname} />
                <label htmlFor="lname">fname:</label>
                <input type="text" name='lname' placeholder='lname' onChange={handleInput} value={input.lname} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                <ul>
                    {
                        fullNane.map((name, index) => {
                            return <li key={index}>{name}</li>
                        })
                    }
                </ul>
            </div >
        </>
    )
}

export default Task2;