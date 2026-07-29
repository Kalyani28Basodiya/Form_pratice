import React, { useState } from 'react'

const Task3 = () => {
    const [inputData, setInputData] = useState(
        {
            fname: ""
            , lname: ""
        }
    )
    const [fullName, setfullName] = useState([])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = inputData.fname + " " + inputData.lname
        setfullName([...fullName, name])
        setInputData(
            {
            fname: ""
            , lname: ""
        }
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="fname">fname</label>
                <input type="text" name='fname' id='fname' placeholder='enter f name' onChange={handleInput} value={inputData.fname} />
                <label htmlFor="lname"></label>
                <input type="text" name='lname' id='lname' placeholder='enter l name' onChange={handleInput} value={inputData.lname} />
                <button type='submit'>submit</button>
            </form>
            <div>
                <ul>
                    {
                        fullName.map((curr, index) => {
                            return <li key={index}>{curr}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Task3;