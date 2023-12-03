import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            name: "Soumojit",
            number: "123",
            code: "098",
        },
        {
            name: "Raj",
            number: "456",
            code: "567",
        },
        {
            name: "Baban",
            number: "593",
            code: "246",
        }
    ];
    return NextResponse.json(users)
}

export function POST(request) {
    const body = request.body;
    console.log(body);
    // console.log(request.method);
    // console.log(request.headers);
    console.log(request.nextUrl.pathname);

    return NextResponse.json({
        message: "posting user data",
    })

}

export function DELETE(request) {
    console.log("Delete API Called");
    return NextResponse.json({
        message: "deleted",
        status: true,
    });
}


// call by : http://localhost:3000/api