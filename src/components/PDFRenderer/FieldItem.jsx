import Input from "@mui/material/Input";

export default function FieldItem({ field }) {
    return (
        <div className="absolute border px-4 py-2 bg-white" style={{ top: field.y, left: field.x }}>
            {field.fieldType === "text" && "Text"}
            {field.fieldType === "signature" && "Signature"}
            {field.fieldType === "date" && "Date"}
            {field.fieldType === "radio" && <input type="radio" />}
            {field.fieldType === "image" && "Image"}
        </div>
    )
}