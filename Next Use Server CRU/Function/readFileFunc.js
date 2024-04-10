"use server"
import fs from "fs/promises";


export const readFileFunc = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let a = await fs.readFile("raj.txt", "utf-8");
            resolve(a);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}