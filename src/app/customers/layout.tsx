import { PageLayout, PageLayoutProps } from '../components/layouts/PageLayout';

export default function CustomersPageLayout({
  children,
  buttonTitle,
  handleOpenModal,
}: PageLayoutProps) {
  return (
    <PageLayout buttonTitle={buttonTitle} handleOpenModal={handleOpenModal}>
      {children}
    </PageLayout>
  );
}
