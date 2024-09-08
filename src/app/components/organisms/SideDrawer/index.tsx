'use client';

import {
  Box,
  CSSObject,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
  useTheme,
} from '@mui/material';

import MuiDrawer from '@mui/material/Drawer';
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { FC, useMemo, useState } from 'react';
import Link from 'next/link';
import { routesMap } from '@/constants/routes';

const DRAWER_WIDTH = '250px';

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: '#111D39',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  position: 'relative',
  backgroundColor: '#111D39',
  width: `calc(${DRAWER_WIDTH} - 200px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  minHeight: '100%',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const SideDrawer: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleToggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const routes = useMemo(
    () =>
      Array.from(routesMap, ([pathname, text]) => ({
        pathname,
        text,
      })),
    []
  );

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxSizing: 'border-box',
          borderRight: 1,
          borderColor: '#3b414f',
        }}
      >
        <Box width="100%">
          <Box
            display="flex"
            paddingY={theme.spacing(3)}
            justifyContent={open ? 'flex-end' : 'center'}
            marginRight={open ? '13px' : undefined}
          >
            <IconButton
              onClick={handleToggleDrawer}
              sx={{
                padding: 0,
                backgroundColor: 'red',
                // ':hover': { backgroundColor: 'green' },
                color: 'white',
              }}
            >
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
          <List sx={{ padding: 0 }}>
            {routes.map(({ pathname, text }, _index) => (
              <Link
                key={text}
                style={{ color: 'white', textDecoration: 'none' }}
                href={pathname}
              >
                <ListItem
                  key={text}
                  disablePadding={true}
                  sx={{ padding: 0, paddingY: 2 }}
                >
                  <ListItemIcon
                    sx={{
                      padding: 0,
                      minWidth: !open ? '50px' : 'auto',
                      width: !open ? '50px' : 'auto',
                    }}
                  >
                    <InboxIcon
                      sx={{
                        marginX: open ? '13px' : 'auto',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
