import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { InfoTopBar } from '../../organisms/InfoTopBar';

export type PageLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ width: '100%', paddingX: '40px', paddingY: '24px' }}>
      <InfoTopBar />
      {children}
    </Box>
  );
};
