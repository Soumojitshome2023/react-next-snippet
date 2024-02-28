import fs from "fs/promises";

export default function page() {

  const clickevent = async (e) => {
    "use server"
    // let a = await fs.readFile("raj.txt");
    // let b = await fs.writeFile("raj.txt", "hello  " + a + e.get("name"));
    let b = await fs.writeFile("raj.txt", "hello  " + e.get("name"));
  }

  return (
    <div>
      Server

      <form action={clickevent}>
        <input type="text" name="name" />
        <button type="submit">Update User Name</button>
      </form>

    </div>
  )
}
