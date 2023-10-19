import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

// ==================================== Get By ID ====================================
export async function GET(request, { params }) {
    const { userid } = params;
    const user = await User.findById(userid);

    // Get Data By Email 
    /*const user = await User.findOne({
        email: userid,
    });*/

    return NextResponse.json(user);
}

// ========================================================================

// ========================== PUT or Update By ID ==========================
export async function PUT(request, { params }) {
    const { userid } = params;
    const { name, email } = await request.json();

    try {
        const user = await User.findById(userid);
        user.name = name;
        user.email = email;

        const UpdateUser = await user.save();

        return NextResponse.json(UpdateUser);


    } catch (error) {
        console.log("error");
        return NextResponse.json({
            message: "Failed to Update",
            status: 201,
        });

    }
}

// ========================================================================

// ==================================== Delete By ID ===================================
export async function DELETE(request, { params }) {
    const { userid } = params;
    try {
        await User.deleteOne({
            _id: userid,
        });
        return NextResponse.json({
            message: "Deleted",
            success: true,
        });
    } catch (error) {
        console.log("error");
        return NextResponse.json({
            message: "Failed to create ",
            status: 201,
        });
    }
}

// ========================================================================
// call by : http://localhost:3000/api