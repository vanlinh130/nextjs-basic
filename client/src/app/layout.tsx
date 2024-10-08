import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import SlideSession from '@/components/slide-session';
import AppProvider from '@/app/app-provider';
import { AccountResType } from '@/schemaValidations/account.schema';
import { baseOpenGraph } from '@/app/shared-metadata';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: {
        template: '%s | Productic',
        default: 'Productic',
    },
    description: 'Được tạo bởi Linh dev',
    openGraph: baseOpenGraph,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let user: AccountResType['data'] | null = null;

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <AppProvider user={user}>
                        <Header user={user} />
                        {children} <SlideSession />
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
