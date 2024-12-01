import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type FormAction = {
  className?: string;
  title: string;
  onClick: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
};

type FormInput<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  type?: HTMLInputTypeAttribute;
};

export type FormProps<T extends FieldValues> = {
  actions: FormAction[];
  inputs: FormInput<T>[];
  onSubmit: () => void;
};
