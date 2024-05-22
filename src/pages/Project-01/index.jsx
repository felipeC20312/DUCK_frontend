import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import React from 'react';
import ImageSwitcher from './components/imageSwitcher';

export default function Project01() {
  const [modalState, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  const url =
    'https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-07-38-745_TestePDF.pdf';

  const data = [
    {
      name: 'pdf',
      url: 'https://docs.google.com/gview?url=https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-07-38-745_TestePDF.pdf&embedded=true',
    },
    {
      name: 'xlsx',
      url: 'https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-06-30-802_TestXLSX.xlsx',
    },
    {
      name: 'xls',
      url: 'https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-06-38-081_TestXLS.xls',
    },
    {
      name: 'png',
      url: 'https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-07-17-723_TestePNG.png',
    },
    {
      name: 'jpg',
      url: 'https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-07-32-601_TesteJPG.jpg',
    },
  ];

  //https://docs.google.com/a/localhost:5173//viewer?url=https://fgr.blob.core.windows.net/request-finantial/RequestAttachment/2024-05-22-13-07-38-745_TestePDF.pdf

  return (
    <>
      <div>Page01</div>
      <Button onClick={handleOpenModal}>Preview</Button>
      <ImageSwitcher
        url={url}
        modalState={modalState}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
