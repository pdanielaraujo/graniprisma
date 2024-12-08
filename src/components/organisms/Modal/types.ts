import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  open: boolean;
  title: string;
  description?: string;
  handleClose: () => void;
};
