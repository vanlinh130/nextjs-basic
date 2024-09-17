import React from 'react';

export default function BlogLayout({
    children,
    analytics,
    team,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
}) {
    return (
        <>
            {children} {team} {analytics}
        </>
    );
}
