
"use client"
import { useRef, useState } from 'react';
import jsPDF from 'jspdf';

const UploadImgToPdfGenerator = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const generatePDF = () => {
        if (image) {
            const img = new Image();
            img.src = image;

            const Width = 300;

            img.onload = () => {
                const aspectRatio = img.width / img.height;
                // Set custom page size
                const customPageSize = {
                    width: Width + 20, // Width in mm
                    height: (Width / aspectRatio) + 20, // Height in mm
                };

                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: [customPageSize.width, customPageSize.height],
                });

                // Calculate dimensions to maintain original aspect ratio
                const maxWidth = (customPageSize.width - 10);
                const maxHeight = (customPageSize.height - 10);

                // Add image to the PDF
                pdf.addImage(image, 'JPEG', 5, 5, maxWidth, maxHeight);
                // pdf.addPage();
                // pdf.addImage(image, 'JPEG', 5, 5, maxWidth, maxHeight);


                // Save PDF
                pdf.save('generated-pdf.pdf');
            };
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />

            <button onClick={generatePDF} disabled={!image}>
                Upload Img To Generate PDF
            </button>
        </div>
    );
};

export default UploadImgToPdfGenerator;