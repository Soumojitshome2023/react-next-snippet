import mongoose, { Schema } from "mongoose";

const Model_Name = "test";


const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Email requireed"],
    },
});

export const User = mongoose.models.Model_Name || mongoose.model(Model_Name, UserSchema)