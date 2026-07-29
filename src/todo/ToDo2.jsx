import React, { useState, useEffect } from 'react'
import { IoIosAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const getLocalStorageData = () => {
    const List = localStorage.getItem("newToDoList")
    if (List) {
        return JSON.parse(List)
    } else {
        return []
    }
}
const ToDo2 = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(() => getLocalStorageData())
    const [toggleButton, setToggleButton] = useState(false)
    const [isEditItem, setIsEditItem] = useState()
    const addItem = () => {
        if (!inputData) {
            alert("Fill the form")
        } else if (inputData && toggleButton) {
            setItems(
                items.map((currEle) => {
                    if (currEle.id == isEditItem) {
                        return { ...currEle, name: inputData }
                    }
                    return currEle
                })

            )
            setInputData("")
            setIsEditItem()
            setToggleButton(false)
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString()
                , name: inputData
            }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }
    // delete items
    const deleteItem = (id) => {
        const updateItems = items.filter((currEle) => {
            return currEle.id !== id
        })
        setItems(updateItems)
    }
    // remove All
    const removeAll = () => {
        setItems([])
    }
    useEffect(() => {
        localStorage.setItem("newToDoList", JSON.stringify(items))
    }, [items])

    // edit items
    const editItem = (id) => {
        const items_edited = items.find((currEle) => {
            return currEle.id == id
        })
        setInputData(items_edited.name)
        setIsEditItem(id)
        setToggleButton(true)
    }

    return (
        <>
            <div>
                <div>
                    <input type="text" placeholder='Add Item' onChange={(e) => setInputData(e.target.value)} value={inputData} />
                    {toggleButton ? (<MdEdit onClick={addItem} />) :
                        (<IoIosAdd onClick={addItem} />)
                    }
                </div>

                {/* show all items */}
                <div>
                    {
                        items.map((currEle) => {
                            return (
                                <div>
                                    <h3 key={currEle.id}>{currEle.name}</h3>
                                    <div>
                                        <CiEdit onClick={() => editItem(currEle.id)} />
                                        <MdDelete onClick={() => deleteItem(currEle.id)} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div>
                    <button onClick={removeAll}>Check List</button>
                </div>
            </div>
        </>
    )
}

export default ToDo2;