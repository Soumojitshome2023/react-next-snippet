"use client"
import { useRef, useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function PdfLib_PDF_To_PDF_Merger() {
  const pdfRef1 = useRef(null);
  const pdfRef2 = useRef(null);
  const [mergedPdf, setMergedPdf] = useState(null);

  const handleFileChange = async (e, pdfRef) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = async () => {
      const existingPdfBytes = new Uint8Array(reader.result);
      pdfRef.current = await PDFDocument.load(existingPdfBytes);
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const mergePDFs = async () => {
    if (pdfRef1.current && pdfRef2.current) {
      const mergedPdfDoc = await PDFDocument.create();
      const [pdf1Page] = await mergedPdfDoc.copyPages(pdfRef1.current, [0]);
      const [pdf2Page] = await mergedPdfDoc.copyPages(pdfRef2.current, [0]);

      mergedPdfDoc.addPage(pdf1Page);
      mergedPdfDoc.addPage(pdf2Page);

      const mergedPdfBytes = await mergedPdfDoc.save();
      setMergedPdf(URL.createObjectURL(new Blob([mergedPdfBytes], { type: 'application/pdf' })));
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e, pdfRef1)} />
      <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e, pdfRef2)} />

      <button onClick={mergePDFs}>Merge PDFs</button>

      {mergedPdf && (
        <div>
          <h2>Merged PDF:</h2>
          <iframe title="Merged PDF" src={mergedPdf} width="600" height="400" />
        </div>
      )}
    </div>
  );
};

