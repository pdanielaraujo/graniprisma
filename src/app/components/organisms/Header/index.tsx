import { Box, Stack, Typography } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { FC } from 'react';
import { Menu } from '../Menu';

export const Header: FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'relative',
        boxSizing: 'border-box',
        height: '56px',
        borderBlockEnd: '1px solid #3b414f',
        color: 'white',
        backgroundColor: '#111D39',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography>Logo // Graniprisma</Typography>
      </Box>
      <Stack direction={'row'}>
        <Notifications />
        <Stack direction={'row'}>
          <Typography>Alice Araújo</Typography>
          <Menu />
        </Stack>
      </Stack>
    </Stack>
  );
};
