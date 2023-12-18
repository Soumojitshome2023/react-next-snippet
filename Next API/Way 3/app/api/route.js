import { NextResponse } from "next/server";

export function GET(request) {

    return NextResponse.json({
        "name": "Raj",
        "email": "Raj@",
    })
}

export async function POST(request) {
    const body = await request.json();
    console.log(body);
    // console.log(request.method);
    // console.log(request.headers);
    console.log(request.nextUrl.pathname);

    return NextResponse.json({
        message: "posting user data",
        body: body
    })

}

