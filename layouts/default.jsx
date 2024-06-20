'use client'
import { Link } from '@nextui-org/react';
import { Navbar } from '@/components/navbar';
import Header from './head';
import AppThemeProvider from 'app/provider';
export default function DefaultLayout({ children }) {
  return (
    <AppThemeProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>

      <div className="relative flex flex-col h-screen">
        <Header />
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">NextUI</p>
          </Link>
        </footer>
      </div>
    </AppThemeProvider>
  );
}
