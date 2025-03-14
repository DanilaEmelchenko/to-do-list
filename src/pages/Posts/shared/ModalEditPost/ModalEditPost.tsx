import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";
import { FC } from "react";
import { getStyleModal } from "../helpers/getStyleModal";
import { IEditPost } from "../../Posts";

interface IModalEditPostProps {
  editPostInputs: IEditPost;
  setEditPostInputs: React.Dispatch<React.SetStateAction<IEditPost>>;
  saveEditPost: () => void;
  handelModalClose: () => void;
  modalOpen: boolean;
}

const ModalEditPost: FC<IModalEditPostProps> = ({
  editPostInputs,
  setEditPostInputs,
  saveEditPost,
  handelModalClose,
  modalOpen,
}) => {
  const isSaveButtonDisabled = (): boolean => {
    return !editPostInputs.title.trim() && !editPostInputs.message.trim();
  };

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
            label="Заголовок поста"
            value={editPostInputs.title}
            onChange={(e) =>
              setEditPostInputs((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            variant="outlined"
            multiline
            fullWidth
            required
          />
          <TextField
            label="Сообщение поста"
            value={editPostInputs.message}
            onChange={(e) =>
              setEditPostInputs((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
            variant="outlined"
            multiline
            fullWidth
            required
          />
          <Button
            disabled={isSaveButtonDisabled()}
            variant="contained"
            onClick={saveEditPost}
          >
            Сохранить
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalEditPost;
