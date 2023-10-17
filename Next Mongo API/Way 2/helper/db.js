import mongoose from "mongoose";
import { User } from "../models/user";



export const connectDb = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "db_test",
        })
        console.log("Db Connected");
        // console.log(connection)

        // test
        // const uuser = new User({
        //     name: "raj",
        //     email: "soumo@gmail.com",
        // });
        // await uuser.save();
        // console.log("User is created");

    } catch (error) {
        console.log(error);
    }

}