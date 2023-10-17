import mongoose, { Schema } from "mongoose";



const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email requireed"],
    },
});

export const User = mongoose.models.test || mongoose.model("test", UserSchema)