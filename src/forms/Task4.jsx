import React, { useState } from 'react'

const Task4 = () => {
    const [inputData, setInputData] = useState(
        {
            fname: "",
            lname: ""
        }
    )
    const [fullName, setFullName] = useState([])
    console.log(fullName)
    const handleInput = (e) => {
        const { name, value } = e.target
        setInputData((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = inputData.fname + " " + inputData.lname
        if (!fullName.includes(data)) {
            setFullName([...fullName, data])
        }else{
            alert("already exist")
        }

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

                <label htmlFor="fname">Name:</label>
                <input type="text" name='fname' placeholder='fname' id='fname' onChange={handleInput} value={inputData.fname} />

                <label htmlFor="lname">Last:</label>
                <input type="text" name='lname' placeholder='lname' id='lname' onChange={handleInput} value={inputData.lname} />

                <button type='submit'>Submit</button>
            </form>
            <ul>
                {
                    fullName.map((curr, index) => {
                        return <li key={index}>{curr}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default Task4;