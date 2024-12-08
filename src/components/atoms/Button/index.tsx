import { FC } from 'react';
import { ButtonProps } from './types';
import { Text } from '../Text';

export const Button: FC<ButtonProps> = ({
  className,
  color = 'primary',
  onClick,
  title,
  type = 'button',
  variant = 'primary',
}) => {
  console.log('Button', title);
  switch (variant) {
    case 'primary': {
      return (
        <button
          className="bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
          color={color}
          onClick={onClick}
          type={type}
        >
          <Text variant="buttonText" color="white">
            {title}
          </Text>
        </button>
      );
    }
    case 'link': {
      return (
        <button color={color} onClick={onClick} type={type}>
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
          type={type}
        >
          {title}
        </button>
      );
    }
  }
};
