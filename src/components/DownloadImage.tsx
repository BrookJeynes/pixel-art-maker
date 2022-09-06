import React, { useCallback } from "react";
import { toPng } from 'html-to-image'

//import mui button from @mui/material
import { Button } from '@mui/material';

const DownloadImage = (props: any) => {
  const ref = props.componentReference;

  const downloadPng = useCallback(() => {
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

  const handleClick = (fileFormat: string) => {
    if (ref.current === null) {
      return;
    }

    switch (fileFormat) {
      case 'PNG':
        downloadPng();
        break;
      default:
        console.log('Unsupported type');
        break;
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleClick('PNG')}>
        Download PNG
      </Button>
    </div>
  )
}

export default DownloadImage;