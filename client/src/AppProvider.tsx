'use client';

import { ClientSessionToken } from '@/lib/http';
import { useState } from 'react';

export default function AppProvider({
    children,
    inititalSessionToken = '',
}: {
    children: React.ReactNode;
    inititalSessionToken?: string;
}) {
    // chỉ chạy 1 lần duy nhất trong render và render ra đầu tiên trước cả children
    useState(() => {
        if (typeof window !== 'undefined') {
            ClientSessionToken.value = inititalSessionToken;
        }
    });
    return <>{children}</>;
}
