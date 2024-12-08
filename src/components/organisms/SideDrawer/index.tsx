'use client';

import { routesMap } from '@/constants/frontEnd/routes';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
export const SideDrawer: FC = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () =>
      Array.from(routesMap, ([pathname, text]) => ({
        pathname,
        text,
      })),
    []
  );

  console.log({ pathname });

  return (
    <div className="w-8 md:w-64 top-0 bottom-0 left-0 bg-blue-700 text-white flex flex-col fixed border-r-gray-700 border-r-2">
      <div className="items-center justify-start md:bg-gradient-to-b from-blue-500 from-30%">
        <Image
          src="/www-removebg-preview.png"
          alt="Graniprisma Logo"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />
      </div>

      <nav className="flex-grow ">
        {routes.map((route) => (
          <a
            key={route.pathname}
            href={route.pathname}
            className={`block px-8 py-2 hover:bg-blue-500 ${pathname === route.pathname && 'bg-blue-600'}`}
          >
            {route.text}
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
          Help
        </a>
      </div>
    </div>
  );
};
