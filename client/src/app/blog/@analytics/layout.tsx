import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Link href="/blog/views">Link Views</Link>
            </nav>
            <div>{children}</div>
        </>
    );
}
