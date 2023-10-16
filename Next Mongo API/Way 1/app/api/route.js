import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

// ==================================== Get Whole Data ====================================
export async function GET(request) {
    let users = [];

    try {
        users = await User.find();

    } catch (error) {
        console.log("error");
        return NextResponse.json({
            message: "Failed to create ",
            status: 201,
        });

    }
    return NextResponse.json(users)
}

// ========================================================================

// ==================================== Post ====================================
export async function POST(request) {
    
    const { name, email } = await request.json();
    const user = new User({
        name, email
    });
    try {
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            status: 201,
        });
        return response;

    } catch (error) {
        console.log("Error")
        return NextResponse.json({
            message: "Failed to create ",
            status: 201,
        });
    }


}

// ========================================================================

// call by : http://localhost:3000/api