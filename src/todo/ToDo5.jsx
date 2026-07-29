import React from 'react'

const ToDo5 = () => {
    const [inputData, setInputData] = useState("")
    return (
        <div>
            <input type="text" placeholder='enter item' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
            <button>+</button>
        </div>
    )
}

export default ToDo5