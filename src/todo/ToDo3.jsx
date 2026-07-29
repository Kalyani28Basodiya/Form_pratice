import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const ToDo3 = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])
    const [editItem, setEditItem] = useState()
    const [toggleButton, settoggleButton] = useState(false)
    const addItem = () => {
        if (!inputData) {
            alert("Fill the data")
        }
        else if (inputData && toggleButton) {
            setItems(
                items.map((curr) => {
                    if (curr.id == editItem) {
                        return { ...curr, name: inputData }
                    }
                    return curr
                })
            )
            settoggleButton(false)
            setInputData("")
            setEditItem()
        }
        else {

            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newData])
            setInputData("")
        }
    }
    const deleteItem = (id) => {
        const updateItems = items.filter((currElm) => {
            return currElm.id !== id
        })
        setItems(updateItems)
    }
    const editItems = (id) => {
        const newEditData = items.find((curr) => {
            return curr.id == id

        })
        setInputData(newEditData.name)
        setEditItem(id)
        settoggleButton(true)
    }
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setInputData(e.target.value)} value={inputData} />
                {
                    toggleButton ? <FaEdit onClick={addItem} /> : <IoMdAddCircle onClick={addItem} />
                }
            </div>
            <div>
                {
                    items.map((curr) => {
                        return <div>
                            <h3 key={curr.id}>{curr.name}</h3>
                            <FaEdit onClick={() => editItems(curr.id)} />
                            <MdDeleteForever onClick={() => deleteItem(curr.id)} />
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default ToDo3;