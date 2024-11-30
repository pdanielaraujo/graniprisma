'use client';

import { FC } from 'react';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  children,
  className = '',
  color = 'text-black',
  error,
  variant = 'body',
}) => {
  const txtColor = error ? 'text-red-500' : `text-${color}`;

  switch (variant) {
    case 'body': {
      return (
        <span className={`${className} ${txtColor} text-sm`}>{children}</span>
      );
    }
    case 'buttonText': {
      return (
        <span
          className={`${className} ${color ? `text-${color}` : 'text-blue-500'} text-sm`}
        >
          {children}
        </span>
      );
    }
    case 'h1': {
      return (
        <span className={`${className} ${txtColor} text-xl font-semibold`}>
          {children}
        </span>
      );
    }
    case 'h2': {
      return (
        <span className={`${className} text-lg font-semibold`}>{children}</span>
      );
    }
    case 'h3': {
      return (
        <span className={`${className} text-md font-semibold`}>{children}</span>
      );
    }
  }
};
