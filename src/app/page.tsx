'use client';

import { useState } from 'react';
import { PageLayout } from './components/layouts/PageLayout';
import { InfiniteScrollTable } from './components/organisms/Table';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PageLayout
      open={open}
      buttonTitle={'adsdasdas'}
      handleOpenModal={handleOpen}
      handleCloseModal={handleClose}
    >
      <InfiniteScrollTable />
    </PageLayout>
  );
}
