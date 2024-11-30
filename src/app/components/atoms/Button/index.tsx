import { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  color = 'primary',
  onClick,
  title,
  variant = 'primary',
}) => {
  console.log('Button', title);
  switch (variant) {
    case 'primary': {
      return (
        <button
          className="bg-blue-400 rounded-md px-4 py-2"
          color={color}
          onClick={onClick}
        >
          {title}
        </button>
      );
    }
    case 'link': {
      return (
        <button color={color} onClick={onClick}>
          {title}
        </button>
      );
    }
    case 'outline': {
      return (
        <button
          className="border-blue-500 border-2 hover:bg-blue-300 rounded-md px-4 py-2"
          color={color}
          onClick={onClick}
        >
          {title}
        </button>
      );
    }
  }
};
