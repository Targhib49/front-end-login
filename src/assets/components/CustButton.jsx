export default function CustButton (props) {
    const myStyle = {
        backgroundColor: "#50C2C9",
        color: "#FFFFFF",
        textAlign: "center",
        padding: "5% 30%",
        fontSize: "18px",
        border: "none",
        cursor: "pointer"

    };
    return (
        <>
            <button style={myStyle} onClick={props.click}>{props.text}</button>
        </>
    )
}