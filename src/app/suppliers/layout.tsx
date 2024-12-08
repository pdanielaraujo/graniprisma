import {
  PageLayout,
  PageLayoutProps,
} from '../../components/layouts/PageLayout';

export default function SuppliersPageLayout({
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
