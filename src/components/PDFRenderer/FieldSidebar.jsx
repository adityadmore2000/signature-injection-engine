export default function FieldSidebar({ onDragStart }) {
    const items = [
        "text",
        "signature",
        "date",
        "radio",
        "image"
    ];
    return (
        <div style={{
            width: "200px",
            background: "#f3f3f3",
            padding: "10px",
            borderRight: "1px solid #ccc"
        }}>
            <h2 style={{ marginBottom: "10px" }}>Fields</h2>
            {items.map(f => (
                <div
                    key={f.fieldType}
                    draggable
                    onDragStart={(e) => onDragStart(e, f)}
                    style={{
                        padding: "8px",
                        marginBottom: "8px",
                        background: "white",
                        border: "1px solid #aaa",
                        borderRadius: "6px",
                        cursor: "grab"
                    }}
                >
                    {f}
                </div>
            ))}
        </div>
    )
}