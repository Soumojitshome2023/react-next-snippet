import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState("Hello Raj");

  const changeText = () => {
    setText("Hello Soumojit");
  };

  return (
    <>
      <div>Home</div>

      <p>{text}</p>
      <button onClick={changeText}>Change Text</button>
    </>
  );
}
