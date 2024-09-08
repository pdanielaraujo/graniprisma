'use client';

import { Box, Button, Typography } from '@mui/material';
import { FC, useRef } from 'react';
import { CustomBreadcrumbs } from '../../molecules/Breadcrumbs';
import { usePathname } from 'next/navigation';
import { routesMap } from '@/constants/routes';
import { Modal } from '../Modal';

export const InfoTopBar: FC = () => {
  // Refs
  const isModalOpen = useRef(false);
  // States
  const pathname = usePathname();

  const handleOpenModal = () => {
    isModalOpen.current = true;
  };

  const handleCloseModal = () => {
    isModalOpen.current = false;
  };

  return (
    <Box sx={{ marginBottom: '16px' }}>
      <CustomBreadcrumbs />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">{routesMap.get(pathname)}</Typography>
        <Modal />
      </Box>
    </Box>
  );
};
