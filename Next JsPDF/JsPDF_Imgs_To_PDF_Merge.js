"use client"
// pages/index.js

import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';


export default function JsPDF_Imgs_To_PDF_Merge() {
    const imageRefs = useRef([]);
    const [mergedPdf, setMergedPdf] = useState(null);

    const handleImageFileChange = (e) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            const newImageRefs = Array.from(files).map(() => React.createRef());
            imageRefs.current = [...imageRefs.current, ...newImageRefs];

            Array.from(files).forEach((file, index) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    const imageDataUrl = reader.result;
                    imageRefs.current[index].current = new Image();
                    imageRefs.current[index].current.src = imageDataUrl;
                };

                reader.readAsDataURL(file);
            });
        }
    };
    const mergeImagesIntoPdf = () => {
        const pdf = new jsPDF();

        imageRefs.current.forEach((imageRef, index) => {
            if (imageRef.current) {
                const imageDataUrl = imageRef.current.src;

                try {
                    if (index > 0) {
                        pdf.addPage();
                    }

                    pdf.addImage(imageDataUrl, 'JPEG', 10, 10, 90, 120);
                } catch (error) {
                    console.error(`Error adding image at index ${index} to PDF:`, error);
                }
            } else {
                console.warn(`Image reference at index ${index} is null.`);
            }
        });

        try {
            const mergedPdfData = pdf.output('datauristring');
            setMergedPdf(mergedPdfData);

            // Optional: Log the data URL for debugging
            console.log('Merged PDF Data URL:', mergedPdfData);
        } catch (error) {
            console.error('Error generating merged PDF:', error);
        }
    };


    return (
        <div>
            <input type="file" accept="image/*" multiple onChange={handleImageFileChange} />

            <button onClick={mergeImagesIntoPdf}>Merge Images into PDF</button>

            {mergedPdf && (
                <div>
                    <h2>Merged PDF:</h2>
                    <iframe title="Merged PDF" src={mergedPdf} width="600" height="400"></iframe>
                </div>
            )}

        </div>
    );
};


