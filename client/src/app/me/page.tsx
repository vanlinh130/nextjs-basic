import accountApiRequest from '@/apiRequests/account';
import ProfileForm from '@/app/me/profile-form';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hồ sơ người dùng',
};

export default async function MyProfile() {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken');
    // Vì dùng cookie nên api này không được cached trên server

    const result = await accountApiRequest.me(sessionToken?.value ?? '');

    return (
        <div>
            <h1>Profile</h1>
            <h2>{result.payload?.data.name}</h2>
            <ProfileForm profile={result.payload.data} />
        </div>
    );
}
