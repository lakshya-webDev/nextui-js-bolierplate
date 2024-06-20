import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import '@/styles/globals.css';
import DefaultLayout from '@/layouts/default';
import Head from 'next/head';
const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
};

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
                <title>{metadata.title.default}</title>
                <meta name="description" content={metadata.description} />
                {metadata.icons.icon && <link rel="icon" href={metadata.icons.icon} />}
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
