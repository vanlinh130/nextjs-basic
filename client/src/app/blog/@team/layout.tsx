import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Link href="/blog/settings">Link settings</Link>
            </nav>
            <div>{children}</div>
        </>
    );
}
