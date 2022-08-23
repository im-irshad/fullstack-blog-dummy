import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Field } from "formik";
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

function ProfileUpdateModel({ props }) {
  console.log(props.id);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        {props.name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">{props.name}</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id={props.name}
            label={props.name}
            name={props.name}
            autoComplete="email"
            autoFocus
          />
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileUpdateModel;
