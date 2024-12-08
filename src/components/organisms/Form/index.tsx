'use client';

import { FC } from 'react';
import { Input } from '../../atoms/Input';
import { FormProps } from './types';
import { Button } from '../../atoms/Button';
import { FieldValues } from 'react-hook-form';

export const Form = <T extends FieldValues>({
  actions,
  inputs,
  onSubmit,
}: FormProps<T>) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="flex flex-col gap-6">
        {inputs.map(({ label, name, placeholder, register, type }, index) => (
          <div key={index} className="flex flex-col">
            <label>{label}</label>
            <Input
              name={name}
              placeholder={placeholder}
              register={register}
              type={type}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        {actions.map(({ title, type, onClick, className }, index) => (
          <Button
            key={index}
            className={className}
            onClick={onClick}
            title={title}
            type={type}
          />
        ))}
      </div>
    </form>
  );
};
