import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export default function ImageSwitcher({
  url,
  modalState,
  handleOpenModal,
  handleCloseModal,
}) {
  const [fileUrl, setFileUrl] = useState(url);

  const identifyFileType = () => {
    if (!fileUrl) return null;

    if (
      fileUrl.includes('.pdf') ||
      fileUrl.includes('.xls') ||
      fileUrl.includes('.xlsx')
    ) {
      return (
        <div>
          <iframe
            src={`https://docs.google.com/gview?url=${fileUrl}&embedded=true`}
            style={{
              display: 'flex',
              width: '100%',
              height: '76vh',
              border: '1px solid black',
              boxSizing: 'border-box',
              borderRadius: '.2rem',
            }}
            title='Document Preview'
          />
        </div>
      );
    } else if (
      fileUrl.includes('.png') ||
      fileUrl.includes('.jpg') ||
      fileUrl.includes('.jpeg') ||
      fileUrl.includes('.gif')
    ) {
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            border: '1px solid black',
            boxSizing: 'border-box',
            borderRadius: '.2rem',
          }}>
          <img
            src={fileUrl}
            alt='File Preview'
            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Dialog
      open={modalState}
      onClose={handleCloseModal}
      fullWidth={true}
      maxWidth={'sm'}>
      <DialogTitle>Preview</DialogTitle>
      <DialogContent>{identifyFileType()}</DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handleCloseModal}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
