'use client';

import { ClientSessionToken } from '@/lib/http';
import { AccountResType } from '@/schemaValidations/account.schema';
import React, { createContext, useContext, useState } from 'react';

type User = AccountResType['data'];

const AppContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
}>({
    user: null,
    setUser: () => {},
});

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
};

export default function AppProvider({
    children,
    inititalSessionToken = '',
    user: userProp,
}: {
    children: React.ReactNode;
    inititalSessionToken?: string;
    user: User | null;
}) {
    const [user, setUser] = useState<User | null>(userProp);
    // chỉ chạy 1 lần duy nhất trong render và render ra đầu tiên trước cả children
    useState(() => {
        if (typeof window !== 'undefined') {
            ClientSessionToken.value = inititalSessionToken;
        }
    });
    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
