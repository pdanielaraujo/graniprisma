'use client';

import { BellIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Text } from '../../atoms/Text';
import { NavigationMenu } from '../../molecules/NavigationMenu';

const HEADER_OPTIONS_ROUTES = [
  { name: 'Profile', path: '/profile' },
  { name: 'Settings', path: '/settings' },
];

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenuOpenState = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-row w-auto bg-blue-700 bg-gradient-to-r from-blue-500 items-center justify-between md:justify-end px-4 md:px-10 py-2 border-b-gray-700 border-b-2">
      <div className="block md:hidden h-full w-8">
        <Image
          // className="rounded-full"
          src="/logo_no_text.png"
          alt="Graniprisma Logo"
          width={40}
          height={40}
          // sizes="(max-width: 256px) (max-height: 50px)"
          // width={256}
          // height={50}
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <BellIcon height={24} color="white" />
        <button
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={handleToggleMenuOpenState}
        >
          <Text variant="h3" className="hidden md:block">
            Alice Araújo
          </Text>
          <div className="relative">
            <Image
              alt="Profile picture"
              className="rounded-full hover:cursor-pointer"
              height={32}
              src="/xxx.png"
              width={32}
            />
            <NavigationMenu
              handleCloseMenu={handleCloseMenu}
              handleLogout={() => console.log('Logout')}
              isMenuOpen={isMenuOpen}
              routes={HEADER_OPTIONS_ROUTES}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
