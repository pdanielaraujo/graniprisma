import { InputProps } from './types';
import { FieldValues } from 'react-hook-form';

export const Input = <T extends FieldValues>({
  name,
  placeholder,
  register,
  type = 'text',
}: InputProps<T>) => {
  return (
    <input
      className="focus:outline-none border p-2 rounded"
      placeholder={placeholder}
      type={type}
      {...register(name)}
    />
  );
};
