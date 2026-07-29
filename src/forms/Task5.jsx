import React, { useState } from 'react'

const Task5 = () => {
    const [inputData, setInputData] = useState(
        {
            fname: "",
            lname: ""
        }
    )
    const [name, setName] = useState([])
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const fullName = inputData.fname + " " + inputData.lname
        setName([...name, fullName])
        setInputData(
            {
                fname: "",
                lname: ""
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Fname</label>
                <input type="text" placeholder='fname' name='fname' id='fname' value={inputData.fname} onChange={handleInput} />
                <label htmlFor="lname">Lname</label>
                <input type="text" placeholder='lname' name='lname' id='lname' value={inputData.lname} onChange={handleInput} />
                <button type='submit'>submit</button>
            </form>
            <div>
                <ul>
                    {
                        name.map((curr,index) => {
                            return <li key={index}>{curr}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Task5;