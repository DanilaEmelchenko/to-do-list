import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";
import { getStyleModal } from "../../helper/getStyleModal";
import { IModalEditPostProps } from "./interfaces";
import { FC } from "react";

const ModalEditPost: FC<IModalEditPostProps> = ({
  editMessagePost,
  setEditMessagePost,
  setEditTitlePost,
  editTitlePost,
  saveEditPost,
  handelModalClose,
  modalOpen,
}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handelModalClose}
      aria-labelledby="modal-modal-titlePost"
      aria-describedby="modal-modal-messagePost"
    >
      <Box sx={getStyleModal()}>
        <Stack spacing={2}>
          <TextField
            label="Сообщение поста"
            value={editTitlePost}
            onChange={(e) => setEditTitlePost(e.target.value)}
            variant="outlined"
            multiline
            fullWidth
          />
          <TextField
            label="Заголовок поста"
            value={editMessagePost}
            onChange={(e) => setEditMessagePost(e.target.value)}
            variant="outlined"
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={saveEditPost}>
            Сохранить
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalEditPost;
