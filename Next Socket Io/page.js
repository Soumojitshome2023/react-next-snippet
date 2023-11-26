"use client"
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const Home = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("GetMessage", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
            console.log(data);
        });
        // Clean up the socket connection on unmount
        return () => {
            console.log('Component is unmounting'); // Log when the component is unmounting
            socket.off('GetMessage'); // Unsubscribe from the event
        };

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

            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;