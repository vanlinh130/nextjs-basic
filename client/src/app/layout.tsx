import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { cookies } from 'next/headers';
import SlideSession from '@/components/slide-session';
import AppProvider from '@/app/app-provider';
import accountApiRequest from '@/apiRequests/account';
import { AccountResType } from '@/schemaValidations/account.schema';

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
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken');

    let user: AccountResType['data'] | null = null;
    if (sessionToken) {
        const data = await accountApiRequest.me(sessionToken.value);
        user = data.payload.data;
    }

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <AppProvider inititalSessionToken={sessionToken?.value} user={user}>
                        <Header user={user} />
                        {children} <SlideSession />
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
