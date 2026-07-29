import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const ToDo4 = () => {
    const [inputData, setInputData] = useState("")
    const [allItems, setAllItems] = useState([])
    const [isToggle, setIsToggle] = useState(false)
    const [editId, setEditId] = useState()
    const handleInput = (e) => {
        setInputData(e.target.value)
    }
    const addItems = () => {
        if (!inputData) {
            alert("fill item")
        } else if (inputData && isToggle) {
            setAllItems(
                allItems.map((curr) => {
                    if (curr.id == editId) {
                        return { ...curr, name: inputData }
                    } return curr
                })
            )
            setEditId()
            setIsToggle(false)
            setInputData("")
        }
        else {
            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setAllItems([...allItems, newData])
            setInputData("")
        }
    }

    const deleteItems = (id) => {
        const updateItems = allItems.filter((curr) => {
            return curr.id !== id
        })
        setAllItems(updateItems)
    }

    const editItems = (id) => {
        const editUpdateItems = allItems.find((curr) => {
            return curr.id == id
        })
        setInputData(editUpdateItems.name)
        setEditId(id)
        setIsToggle(true)


    }

    return (
        <div>
            <div>
                <input type="text" placeholder='Add a Item' value={inputData} onChange={handleInput} />
                {
                    isToggle ? <FaEdit onClick={addItems} /> : <IoIosAddCircle onClick={addItems} />
                }

            </div>
            <div>
                {
                    allItems.map((curr) => {
                        return <div key={curr.id}>
                            <p>{curr.name}</p>
                            <FaEdit onClick={() => editItems(curr.id)} />
                            <MdDeleteForever onClick={() => deleteItems(curr.id)} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default ToDo4;