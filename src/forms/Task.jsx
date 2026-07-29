import React, { useState } from 'react';

const Task = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [namesList, setNamesList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const full = first + " " + last;

        setNamesList([...namesList, full]);

        setFirst("");
        setLast("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Enter Your Name</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Last Name"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <h3>Names List:</h3>
            <ul>
                {namesList.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Task;