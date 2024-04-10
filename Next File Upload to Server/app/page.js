"use client"
import React, { useState } from 'react';
// import axios from 'axios';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const reader = new FileReader();

    reader.onload = async function (event) {
      const fileData = event.target.result;
      const fileName = file.name;

      try {
        // const response = await axios.post('http://localhost:3000/api/upload', { file: fileData, fileName });

        let response = await fetch('http://localhost:3000/api/upload', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              file: fileData,
              fileName: fileName
            }
          )
        });

        const data = await response.json();
        console.log('File uploaded successfully:', data);
        console.log('File uploaded successfully Path:', data.path);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPage;
