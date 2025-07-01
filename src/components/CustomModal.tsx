import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow:"0 0 2px 2px green" ,
  borderRadius:"10px",
  p: 4,
};

export default function CustomModal({open, setOpen ,title, extraClass, color, parentClass, children}:{title:string, extraClass?:string, color:"inherit" | "success", parentClass?:string, children:React.ReactElement, open:boolean, setOpen:any}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={`${parentClass}`}>
      <Button className={`${extraClass}`} variant='outlined' color={color} onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}