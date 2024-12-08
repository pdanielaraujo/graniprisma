'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import Link from 'next/link';
import { FC, useRef } from 'react';
import { NavigationMenuProps } from './types';

export const NavigationMenu: FC<NavigationMenuProps> = ({
  handleCloseMenu,
  handleLogout,
  isMenuOpen,
  routes,
}) => {
  const openingAndClosingTransition = isMenuOpen
    ? 'scale-100 opacity-1'
    : 'scale-0 opacity-0';

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, handleCloseMenu);

  return (
    <div
      ref={ref}
      className={`flex flex-col absolute mt-4 right-0 bg-blue-200 rounded-sm px-8 py-2 text-start transition duration-100  ${openingAndClosingTransition}`}
    >
      {routes.map((route) => (
        <Link key={route.path} href={route.path} onClick={handleCloseMenu}>
          {route.name}
        </Link>
      ))}
      {handleLogout && (
        <>
          <div className="mt-4 h-px bg-black w-full"></div>
          <p onClick={handleLogout}>Logout</p>
        </>
      )}
    </div>
  );
};
