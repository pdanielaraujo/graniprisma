import { FC, useRef } from 'react';
import { ModalProps } from './types';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Text } from '../../atoms/Text';
import { Form } from '../Form';

export const Modal: FC<ModalProps> = ({
  children,
  open,
  handleClose,
  title,
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, handleClose);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${open ? 'block' : 'hidden'}`}
    >
      <div
        ref={ref}
        className="bg-white w-1/3 rounded py-4 px-8 flex flex-col gap-8"
      >
        <div className="flex justify-between">
          <div className="gap-sm">
            <Text variant="h1">{title}</Text>
            {description && description}
          </div>
          <XMarkIcon
            width={24}
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
