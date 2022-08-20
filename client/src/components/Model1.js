import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Model1({ props }) {
  console.log(props.id);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Blog Id: {props.id}
          </Typography>
          <Typography variant="h6" component="h2">
            Blog Title: {props.title}
          </Typography>
          <Typography variant="h6" component="h2">
            Blog Description: {props.description}
          </Typography>
          <Typography variant="h6" component="h2">
            Blog Writer: {props.userId}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Model1;
