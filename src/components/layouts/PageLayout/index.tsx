'use client';

import { FC, ReactNode } from 'react';
import { InfoTopBar } from '../../organisms/InfoTopBar';
import { Modal } from '../../organisms/Modal';

export type PageLayoutProps = Readonly<{
  children: ReactNode;
  buttonTitle?: string;
  handleOpenModal?: () => void;
}>;

export const PageLayout: FC<PageLayoutProps> = ({
  children,
  buttonTitle,
  handleOpenModal,
}) => {
  console.log(buttonTitle);

  return (
    <div className="w-full px-4 md:px-10 py-6">
      <InfoTopBar buttonTitle={buttonTitle} buttonClick={handleOpenModal} />
      {children}
    </div>
  );
};
