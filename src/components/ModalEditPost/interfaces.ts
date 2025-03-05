export interface IModalEditPostProps {
  editMessagePost: string;
  setEditMessagePost: (value: string) => void;
  setEditTitlePost: (value: string) => void;
  editTitlePost: string;
  saveEditPost: () => void;
  handelModalClose: () => void;
  modalOpen: boolean;
}
