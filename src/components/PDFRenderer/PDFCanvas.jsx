import { useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import FieldItem from "./FieldItem";
import { v4 as uuidv4 } from 'uuid';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


export default function PDFCanvas({ pdfUrl, fields, addField }) {
    const pdfWrapperRef = useRef(null);
    function allowDrop(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const fieldType = e.dataTransfer.getData("fieldType");
        if (!fieldType) return;
        const rect = pdfWrapperRef.current.getBoundingClientRect();
        if (!fieldType) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 0 || y < 0) return;
        addField({
            id: uuidv4(),
            fieldType,
            x,
            y
        });
    }
    return (
        <div
            ref={pdfWrapperRef}
            className="relative flex-1 bg-gray-100 overflow-auto"
            onDrop={handleDrop}
            onDragOver={allowDrop}
        >

            <Document file={pdfUrl}>
                <Page pageNumber={1} width={800} />
            </Document>
            {fields.map(f => (
                <div
                    key={f.id}
                    className="absolute bg-yellow-300 border border-red-600 text-sm text-black p-10"
                    style={{
                        left: f.x,
                        top: f.y,
                        zIndex: 9999
                    }}
                >
                    {f.fieldType}
                </div>
            ))}
            {JSON.stringify(fields)}
        </div>
    )
}