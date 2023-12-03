import { NextResponse } from "next/server";

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


/*
Using Thender Client
call by : http://localhost:3000/api

    send body :

    {
        "Name": "baban",
        "Title": "shome"
    }

*/