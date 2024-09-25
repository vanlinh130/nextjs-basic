import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';
import Link from 'next/link';
import ButtonLogout from '@/components/button-logout';

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/login">Đăng nhập</Link>
                </li>
                <li>
                    <Link href="/register">Đăng ký</Link>
                </li>
                <li>
                    <ButtonLogout />
                </li>
            </ul>
            <ModeToggle />
        </div>
    );
}
