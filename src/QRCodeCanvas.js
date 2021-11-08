import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

const QRCodeCanvas = ({ text }) =>{
    const canvasRef = useRef()

    useEffect(() =>{QRCode.toCanvas(canvasRef.current, text, (error) => console.log(error))}, [text])

    return(
        <div> <canvas id='canvas' ref={canvasRef}></canvas> </div>
    )
}

export default QRCodeCanvas