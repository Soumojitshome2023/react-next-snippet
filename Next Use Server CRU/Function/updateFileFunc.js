"use server"
import fs from "fs/promises";


export const updateFileFunc = async (data) => {

    let a = await fs.readFile("raj.txt");
    let b = await fs.writeFile("raj.txt", a + data);
    // let b = await fs.writeFile("raj.txt", "hello  bro " + data);
}