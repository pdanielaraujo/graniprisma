import { PageLayout, PageLayoutProps } from '../components/layouts/PageLayout';

export default function CustomersPageLayout({
  children,
  handleCloseModal,
  open,
  buttonTitle,
  handleOpenModal,
}: PageLayoutProps) {
  return (
    <PageLayout
      handleCloseModal={handleCloseModal}
      open={open}
      buttonTitle={buttonTitle}
      handleOpenModal={handleOpenModal}
    >
      {children}
    </PageLayout>
  );
}
