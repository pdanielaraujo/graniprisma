'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import type { Metadata } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { Header } from '../components/organisms/Header';
import { SideDrawer } from '../components/organisms/SideDrawer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

// export const metadata: Metadata = {
//   title: 'Graniprisma',
//   description: 'Graniprisma, transformadora de pedra',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-clip">
      <body className={`${inter.className} overflow-clip`}>
        <QueryClientProvider client={queryClient}>
          <div className="relative grid grid-cols-[32px_1fr] md:grid-cols-[256px_1fr] grid-rows-[auto_1fr] w-full h-full">
            <div className="hidden md:block md:col-span-1 row-span-2">
              <SideDrawer />
            </div>
            <div className="sticky top-0 col-span-2 md:col-span-1 row-span-1">
              <Header />
            </div>

            <div className="col-span-2 md:col-span-1 row-span-1 overflow-y-auto bg-white">
              {children}
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
