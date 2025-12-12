import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FieldSidebar from "./PDFRenderer/FieldSidebar"
import PDFCanvas from "./PDFRenderer/PDFCanvas";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFRender() {
    const { id } = useParams();
    const [pdfUrl, setPdfUrl] = useState(null);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        setPdfUrl(`http://localhost:3000/pdf/${id}`);
    }, [id]);

    const handleDragStart = (e, type) => {
        console.log("drag started on ", e.target);
        e.dataTransfer.setData("fieldType", type);
    }

    const addField = (field) => {
        setFields(prev => [...prev, field]);
    }

    return (
        <div className="flex h-screen">
            <FieldSidebar onDragStart={handleDragStart} />
            <PDFCanvas pdfUrl={pdfUrl} fields={fields} addField={addField} />
        </div>
    )
}