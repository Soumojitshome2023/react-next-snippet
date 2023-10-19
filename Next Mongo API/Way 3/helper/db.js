import mongoose from "mongoose";

export const connectDb = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "db_test",
        })
        console.log("Db Connected");
    } catch (error) {
        console.log(error);
    }

}