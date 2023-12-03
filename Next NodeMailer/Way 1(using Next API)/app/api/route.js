import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    console.log(body);
    // console.log(request.method);
    // console.log(request.headers);
    console.log(request.nextUrl.pathname);
    // =======================================

    const nodemailer = require("nodemailer");

    let testAccount = await nodemailer.createTestAccount();


    const transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'soumojit.shome@gmail.com',
            pass: 'vhki mqtf kdvq dpsh'
        }
    });

    let info = await transporter.sendMail({
        from: '"Soumojit Shome 👻" <soumojit.shome@gmail.com>', // sender address
        to: "soumojitshome2021@gmail.com", // list of receivers
        subject: "Hello Raj", // Subject line
        text: "Hello Raj", // plain text body
        html: "<b>Hello Soumojit</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    // =======================================

    return NextResponse.json({
        message: "posting user data",
        body: info
    })

}