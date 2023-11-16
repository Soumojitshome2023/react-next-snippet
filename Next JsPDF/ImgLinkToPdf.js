"use client"

import { useRef } from 'react';
import jsPDF from 'jspdf';

const ImgLinkToPdfGenerator = () => {
    const pdfRef = useRef();

    const generatePDF = async () => {
        // Replace 'IMAGE_URL' with the actual image URL
        const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/for-firestore-c7287.appspot.com/o/CertificateDistribution%2F3NRZ7hJONINCEUcGUcKr1Wjf2Dk1%2FEvents%2FCollegeFest_1700037372231%2FCertificates%2F1700045560737_SoumojitShome?alt=media&token=0d41105d-313c-4570-b6e6-09e7c1a674f8';

        // Load image from URL
        const imgData = await fetch(imageUrl).then((response) => response.blob());
        const imgUrl = URL.createObjectURL(imgData);

        // Get image dimensions
        const img = new Image();
        img.src = imgUrl;
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
            pdf.addImage(imgUrl, 'JPEG', 5, 5, maxWidth, maxHeight);

            // Save PDF
            pdf.save('generatedpdf.pdf');
        };
    };

    return (
        <div>

            <button onClick={generatePDF}>Img Link To Generate PDF</button>
        </div>
    );
};

export default ImgLinkToPdfGenerator;


