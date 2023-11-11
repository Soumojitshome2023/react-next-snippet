import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import imageCompression from 'browser-image-compression';

export const Upload_File_Func = (path, ImageUpload) => {
    return new Promise(async (resolve, reject) => {

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        }

        console.log("Run Upload_File_Func");
        // console.log("run 6")
        try {
            const compressedFile = await imageCompression(ImageUpload, options);
            // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

            if (compressedFile != null) {
                const imageRef = ref(storage, path);
                uploadBytes(imageRef, compressedFile).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        // console.log(url);
                        resolve(url);
                        // console.log("run 7")
                    });
                });
            } else {
                resolve("No");
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};