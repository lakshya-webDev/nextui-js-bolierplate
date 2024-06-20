import clsx from 'clsx';
import { fontSans } from '@/config/fonts';
import '@/styles/globals.css';
import DefaultLayout from '@/layouts/default';
import Head from 'next/head';


const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en">
            <Head>
                {viewport.themeColor.map((colorScheme, index) => (
                    <meta
                        key={index}
                        name="theme-color"
                        content={colorScheme.color}
                        media={colorScheme.media}
                    />
                ))}
            </Head>
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <DefaultLayout>
                    {children}
                </DefaultLayout>
            </body>
        </html>
    );
}
