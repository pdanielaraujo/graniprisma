import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

export const CustomBreadcrumbs = () => {
  return (
    <Breadcrumbs color="white">
      <Link color="inherit" href="/">
        MUI
      </Link>
      <Link color="inherit" href="/material-ui/getting-started/installation/">
        Core
      </Link>
      <Link
        color="text.primary"
        href="/material-ui/react-breadcrumbs/"
        aria-current="page"
      >
        Breadcrumbs
      </Link>
    </Breadcrumbs>
  );
};
