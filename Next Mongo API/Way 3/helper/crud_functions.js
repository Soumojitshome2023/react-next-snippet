import { httpsAxios } from "@/helper/httpHelper";

export async function Post_Data(task) {
    const result = await httpsAxios.post("/api/", task).then((response) => response.data);
    return result;

}

export async function Get_Whole_Data() {
    const result = await httpsAxios.get("/api/").then((response) => response.data);
    return result;

}

export async function Get_Data_By_Id(id) {
    const result = await httpsAxios.get("/api/" + id).then((response) => response.data);
    return result;

}

export async function Put_Data_By_Id(task, id) {
    const result = await httpsAxios.put("/api/" + id, task).then((response) => response.data);
    return result;

}

export async function Delete_Data_By_Id(id) {
    const result = await httpsAxios.delete("/api/" + id).then((response) => response.data);
    return result;

}