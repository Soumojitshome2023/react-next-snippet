import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    const { file, fileName } = await request.json();


    // Decode base64 data and write it to a file
    const fileBuffer = Buffer.from(file.replace(/^data:image\/\w+;base64,/, ''), 'base64'); // Remove the data URL prefix before decoding
    const filePath = path.join(process.cwd(), 'public', 'temp', fileName);

    fs.writeFile(filePath, fileBuffer, (err) => {
        if (err) {
            console.error('Error uploading file:', err);
        } else {
            console.log('File uploaded successfully');
        }
    });


    return NextResponse.json({
        path: filePath,
        message: "Successfully",
        success: true
    });
}
