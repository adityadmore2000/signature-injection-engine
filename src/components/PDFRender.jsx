import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./PDFRender.css";
import { useParams } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFRender() {
    const { id } = useParams();
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={`http://localhost:3000/pdf/${id}`} onLoadSuccess={onDocumentLoadSuccess}>
                {numPages && Array.from(new Array(numPages), (_, index) => (
                    <div key={index} className="pdf-page">
                        <Page pageNumber={index + 1} />
                        <p className='page-number'>
                            Page {index + 1} of {numPages}
                        </p>
                    </div>
                ))}
            </Document>
        </div>
    );
}