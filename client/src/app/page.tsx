import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trang chủ',
    description: 'Trang chủ của Productic, được tạo bởi Linh dev',
};

export default function Home() {
    return (
        <main>
            <h1 className="p-4">Xin chào</h1>
        </main>
    );
}
