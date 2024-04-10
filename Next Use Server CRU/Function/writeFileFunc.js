"use server"
import fs from "fs/promises";


export const writeFileFunc = async (data) => {

    // let a = await fs.readFile("raj.txt");
    // let b = await fs.writeFile("raj.txt", "hello  " + a + data);
    let b = await fs.writeFile("raj.txt", data);
}