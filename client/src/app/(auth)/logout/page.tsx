'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ClientSessionToken } from '@/lib/http';
import authApiRequest from '@/apiRequests/auth';

export default function Logout() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sessionToken = searchParams.get('sessionToken');
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (sessionToken === ClientSessionToken.value) {
            authApiRequest.logoutFromNextClientToNextServer(true, signal).then((res) => {
                router.push(`/login?redirectFrom=${pathname}`);
            });
        }
        return () => {
            controller.abort();
        };
    }, [sessionToken, router, pathname]);
    return <div>Logout</div>;
}
