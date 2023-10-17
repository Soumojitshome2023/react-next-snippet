"use client"
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase/firebase";

export default function page() {
  const [imageUpload, setImageUpload] = useState(null);
  const imagesListRef = ref(storage, "images/");

  // ============================= upload File =============================
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  };

  // ============================= Get All Files =============================
  const GetAllFile = () => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url);
        });
      });
    });
  }

  return (
    <div>
      <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} />
      <button onClick={uploadFile}> Upload Image</button>
      <button onClick={GetAllFile}> Get All Image</button>
    </div>
  );
}
