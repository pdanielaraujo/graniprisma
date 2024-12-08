import {
  PageLayout,
  PageLayoutProps,
} from '../../components/layouts/PageLayout';

export default function SignInPageLayout({
  children,
  buttonTitle,
  handleOpenModal,
}: PageLayoutProps) {
  return (
    <PageLayout buttonTitle={buttonTitle} handleOpenModal={handleOpenModal}>
      adasdasdasd
      {children}
    </PageLayout>
  );
}
