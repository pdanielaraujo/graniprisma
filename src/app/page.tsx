import { Typography } from '@mui/material';
import { PageLayout } from './components/layouts/PageLayout';
import { InfiniteScrollTable } from './components/organisms/Table';

export default function Home() {
  return (
    <PageLayout>
      <div>Início</div>
      <InfiniteScrollTable />
    </PageLayout>
  );
}
