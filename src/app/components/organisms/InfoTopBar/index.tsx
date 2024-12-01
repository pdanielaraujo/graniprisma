'use client';

import { routesMap } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { InfoTopBarProps } from './types';

export const InfoTopBar: FC<InfoTopBarProps> = ({
  buttonTitle,
  buttonClick,
}) => {
  const pathname = usePathname();

  const currentRouteName = useMemo(() => routesMap.get(pathname) ?? '', []);
  console.log('InfoTopBar', buttonTitle);

  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Text variant="h1">{currentRouteName}</Text>
        <Button
          title={buttonTitle ?? ''}
          variant="primary"
          onClick={buttonClick}
        />
      </div>
    </div>
  );
};
