export type ModalProps = {
  props?: Record<string, unknown>;
  open: boolean;
  handleClose: () => void;
};
