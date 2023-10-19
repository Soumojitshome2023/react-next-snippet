import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();


// ============================ Sign Up Route Post Data ============================
export async function POST(request) {

    const { name, email, password } = await request.json();
    const user = new User({
        name, email, password
    });
    try {
        user.password = bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT)
        );

        console.log(user);
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            success: true,
        });
        return response;

    } catch (error) {
        console.log("Error")
        return NextResponse.json({
            message: "Failed to Create ",
            success: false,
        });
    }
}

// ========================================================================
