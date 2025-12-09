import Input from '@mui/material/Input';

export default function FileInput({onPDFSelect}) {
    function handleFileSelect(event){
        const file = event.target.files?.[0];
        if(!file) return;
        onPDFSelect(file);
    }
    return (
        <Input type='file' name='pdf-input' required inputProps={{ accept: "application/pdf" }} placeholder="Upload a PDF file here" onChange={handleFileSelect}/>
    )

}