import React, { useState } from 'react'

const NameList = () => {
    const [input, setInput] = useState(
        {
            fname: "",
            lname: ""
        }
    )
    const [list, setList] = useState([])

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const fullName = input.fname + " " + input.lname
        setList([...list, fullName])
        setInput({
            fname: "",
            lname: ""
        })
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname"></label>
                    <input type="text" placeholder='fname' name='fname' id='fname' onChange={handleInput} value={input.fname} />
                    <br />
                    <label htmlFor="lname"></label>
                    <input type="text" placeholder='lname' name='lname' id='lname' onChange={handleInput} value={input.lname} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>

                <ul>
                    {
                        list.map((currEle, index) => {
                            return <li key={index}>{currEle}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NameList;