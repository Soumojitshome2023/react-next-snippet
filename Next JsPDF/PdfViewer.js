// components/PdfViewer.js
"use client"
import { useState } from 'react';

const PdfViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPdfFile(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handlePdfFileChange} />

      {pdfFile && (
        <div>
          <iframe
            title="PDF Viewer"
            src={URL.createObjectURL(pdfFile)}
            width="100%"
            height="500px"
            style={{ border: 'none' }}
          />
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
