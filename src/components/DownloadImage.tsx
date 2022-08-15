import React, { useCallback } from "react";
import { toPng } from 'html-to-image'


const DownloadImage = (props: any) => {
  const ref = props.componentReference;

  const downloadPng = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'canvas.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
  }, [ref]);

  return (
    <button onClick={downloadPng}>
      Download as PNG (Not transparent yet)
    </button>
  )
}

export default DownloadImage;