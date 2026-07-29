import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import './ToDo.css'

const getLocalData = () => {
    try {
        const lists = localStorage.getItem("mytodoList");
        if (lists) {
            return JSON.parse(lists);
        } else {
            return [];
        }
    } catch (error) {
        console.error("LocalStorage Error:", error);
        return [];
    }
};
const ToDo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(() => getLocalData())
    const [isEditedItem, setIsEditedItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)

    const addItem = () => {
        if (!inputData) {
            alert("fill the data")
        } else if (inputData && toggleButton) {
            setItems(
                items.map((currElem) => {
                    if (currElem.id == isEditedItem) {
                        return { ...currElem, name: inputData }
                    }
                    return currElem;
                })
            )
            setInputData("")
            setIsEditedItem(null)
            setToggleButton(false)
        }

        else {
            const myInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, myInputData])
            setInputData("")
        }
    }
    // edit items

    const editItem = (index) => {
        const item_todo_edited = items.find((currElem) => {
            return currElem.id == index
        })
        setInputData(item_todo_edited.name)
        setIsEditedItem(index)
        setToggleButton(true)
    }


    const deleteItem = (index) => {
        const updateItems = items.filter((currElem) => {
            return currElem.id !== index;
        })
        setItems(updateItems)
    }
    const removeAll = () => {
        setItems([])
    }
    useEffect(() => {
        localStorage.setItem("mytodoList", JSON.stringify(items));
    }, [items]);
    return (
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <img src="" alt="" />
                    <figure>Add your list here</figure>
                </figure>
                <div className='addItem'>
                    <input type="text" placeholder='Add Item' className='form-control' value={inputData} onChange={(e) => setInputData(e.target.value)} />

                    {toggleButton ? (<FontAwesomeIcon icon={faEdit} onClick={addItem} />) :
                        (<FontAwesomeIcon icon={faPlus} onClick={addItem} />)}

                </div>
                {/* show items */}
                <div className="showItem">
                    {
                        items.map((currElem) => {
                            return (
                                <div key={currElem.id} className="eachItem">
                                    <h3>{currElem.name}</h3>
                                    <div className="todo-btn">
                                        <FontAwesomeIcon icon={faEdit} onClick={() => editItem(currElem.id)} />
                                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(currElem.id)} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {/* remove all items */}
                <div className='showITem'>
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>Check List </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;