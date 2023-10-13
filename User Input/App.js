import { useState } from "react";

export default function App() {

  const [text, setText] = useState("Entyer your text here");
  const change = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={change} />
      <br />
      <dv id="prev">{text}</dv>
    </>
  );
}
