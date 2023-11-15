"use client"

import { useEffect } from 'react';
import axios from 'axios';

const DownloadImage = () => {
  useEffect(() => {
    const downloadImage = async () => {
      try {
        const imageURL = 'imageLink';

        // Use axios to get the image
        const response = await axios.get(imageURL, { responseType: 'blob' });

        // Save the image locally
        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'downloadedImage.png'; // Specify the desired file name with the correct extension
        link.click();
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    };

    downloadImage();
  }, []);

  return (
    <div>
      <p>Downloading image...</p>
    </div>
  );
};

export default DownloadImage;
