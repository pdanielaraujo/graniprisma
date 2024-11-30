import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './components/organisms/Header';
import { SideDrawer } from './components/organisms/SideDrawer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Graniprisma',
  description: 'Graniprisma, transformadora de pedra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-clip">
      <body className={`${inter.className} overflow-clip`}>
        <div className="relative grid grid-cols-[32px_1fr] md:grid-cols-[256px_1fr] grid-rows-[auto_1fr] w-full h-full">
          <div className="hidden md:block md:col-span-1 row-span-2">
            <SideDrawer />
          </div>
          <div className="sticky top-0 col-span-2 md:col-span-1 row-span-1">
            <Header />
          </div>

          <div className="col-span-2 md:col-span-1 row-span-1 overflow-y-auto bg-gray-100">
            {children}
          </div>
        </div>
        {/* <body className={inter.className} style={{ backgroundColor: '#0E234E' }}> */}
        {/* <div style={{ height: '100vh' }}>
          <div
            className="h-full relative grid"
            style={{
              display: 'grid',
              height: '100%',
              position: 'relative',
              gridTemplateAreas: `sidebar header header
                                  sidebar content content
                                  sidebar content content`,
              gridTemplateRows: '56px auto',
            }}
          >
            <SideDrawer />
            <Header />
            {/* <Box
            sx={{
              display: 'flex',
              flex: 1,
              // width: '100%',
              // height: '100vh',
            }}
          > */}

        {/* <div
              style={{
                display: 'flex',
                position: 'relative',
                height: '100%',
              }}
            >
              {children}
            </div> */}
        {/* </div> */}

        {/* <Box sx={{ overflowY: 'auto', flex: 1 }}></Box> */}
        {/* </Box> */}
        {/* </div>  */}
        {/* <Grid container={true} sx={{ height: '100vh' }}>
          <Grid item={true} xs={12}>
            <Header />
          </Grid>
          <Grid item={true} xs={'auto'}>
            <SideDrawer />
          </Grid>
          <Grid item={true} xs={'auto'}>
            {children}
          </Grid>
        </Grid> */}
        {/* <Header />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '100vh',
          }}
        >
          <SideDrawer />
          <Box sx={{ overflowY: 'auto', flex: 1 }}>{children}</Box>
        </Box> */}

        {/* <Box
          display="grid"
          gridTemplateColumns="250px auto"
          // gridTemplateColumns="repeat(2, auto)"
          gridTemplateRows="max-content auto"
          sx={{ width: '100%', height: '100vh' }}
        >
          <Box gridColumn="span 2">
            <Header />
          </Box>
          <Box gridColumn="auto" gridRow="auto" height="100%">
            <SideDrawer />
          </Box>
          <Box gridColumn="auto" gridRow="auto">
            {children}
          </Box>
        </Box> */}
      </body>
    </html>
  );
}
