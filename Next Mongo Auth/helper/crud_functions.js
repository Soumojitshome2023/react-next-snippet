import { httpsAxios } from "./httpHelper";


export async function signUp(user) {
    const result = await httpsAxios.post("/api/signup", user).then((response) => response.data);
    return result;
}


export async function logIn(loginData) {
    const result = await httpsAxios.post("/api/login", loginData).then((response) => response.data);
    return result;
}


export async function currentUser() {
    const result = await httpsAxios.get("/api/current").then((response) => response.data);
    return result;
}

export async function logOut() {
    const result = await httpsAxios.post("/api/logout").then((response) => response.data);
    return result;
}
