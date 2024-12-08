'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PageLayout } from '../components/layouts/PageLayout';
import { Form } from '../components/organisms/Form';
import { Modal } from '../components/organisms/Modal';
import { InfiniteScrollTable } from '../components/organisms/Table';

type Inputs = {
  name: string;
  email: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  console.log({ errors });

  const onSubmit = (values: Inputs) => {
    console.log({ values });
  };

  console.log(watch('name'));
  console.log(watch('email'));

  return (
    <PageLayout buttonTitle="Criar inicio" handleOpenModal={handleOpen}>
      <InfiniteScrollTable />
      <Modal open={open} handleClose={handleClose} title="Criar inicio">
        <Form
          actions={[
            {
              onClick: () => {
                console.log('1dasdas');
                handleClose();
                handleSubmit(onSubmit);
                console.log('2dasdas');
              },
              title: 'Criar',
              type: 'submit',
            },
          ]}
          inputs={[
            {
              label: 'Nome',
              name: 'name',
              placeholder: 'Escreve um nome',
              register,
            },
            {
              label: 'Email',
              name: 'email',
              placeholder: 'Escreve um email',
              register,
            },
          ]}
          onSubmit={() => 'onSubmit'}
        />
      </Modal>
    </PageLayout>
  );
}
