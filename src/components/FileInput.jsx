import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';

export default function FileInput() {
    const navigate = useNavigate();

    async function handleFileSelect(event) {

        const file = event.target.files?.[0];
        if (!file) return;
        // onPDFSelect(file);
        const formData = new FormData();
        formData.append("pdf", file);

        const res = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        navigate(`/pdf/${data.id}`);
    }
    return (
        <Input type='file' name='pdf-input' required inputProps={{ accept: "application/pdf" }} placeholder="Upload a PDF file here" onChange={handleFileSelect} />
    )

}