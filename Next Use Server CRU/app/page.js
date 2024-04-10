"use client"
import { useState } from "react";
import { writeFileFunc } from "@/Function/writeFileFunc";
import { readFileFunc } from "@/Function/readFileFunc";
import { updateFileFunc } from "@/Function/updateFileFunc";

export default function page() {
  const [Name, setName] = useState("");

  const clickWriteevent = async () => {
    writeFileFunc(Name);
  }
  const clickReadevent = async () => {
    const data = await readFileFunc();
    console.log(data);
  }
  const clickUpdateevent = async () => {
    updateFileFunc(Name);
  }

  return (
    <div>
      Server

      <input type="text" name="name" value={Name} onChange={(e) => setName(e.target.value)} />
      <button onClick={clickWriteevent}>Write</button>
      <button onClick={clickReadevent}>Read</button>
      <button onClick={clickUpdateevent}>Update</button>

    </div>
  )
}
