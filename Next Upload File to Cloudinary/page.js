"use client"
import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "fa4ancsu");
      formData.append("cloud_name", "dl0cnjal4");
      formData.append('folder', 'my_files');

      const response = await fetch(`https://api.cloudinary.com/v1_1/dl0cnjal4/image/upload`, {
        method: 'POST',
        body: formData
      });



      if (response.ok) {
        const data = await response.json();
        console.log('File uploaded successfully:', data.url);
      } else {
        console.error('Failed to upload file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Upload File to Cloudinary</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPage;
