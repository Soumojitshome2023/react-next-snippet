"use client"
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const Home = () => {
    const [input, setInput] = useState('');

    useEffect(() => {
        socket.on("GetMessage", (data) => {
            console.log(data)
        });
    }, []);

    const sendMessage = () => {
        socket.emit('SendMessage', input);
        setInput('');
    };

    return (
        <div>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Home;
