"use client"
import React, { useState } from 'react';
// import sendMail from '@/controllers/sendMail';

export default function page() {
  const [response, setResponse] = useState(null);

  const handleSendMail = async () => {
    try {
      const response = await fetch('http://localhost:5000/mail'); // Update the URL if your server is hosted elsewhere
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  };


  return (
    <div>
      <button onClick={handleSendMail}>Send Mail</button>
      {response && (
        <div>
          <p>Response from server:</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
