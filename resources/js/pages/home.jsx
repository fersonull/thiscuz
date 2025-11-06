import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import apiService from '@/services/api-service';
import { useEffect } from 'react';

export default function Home() {

    const init = async () => {
        const res = await apiService.get("/")

        console.log(res)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <MainLayout>
            <Head title="Welcome" />
            <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800 font-sans">
                <p className="text-2xl font-bold text-black/60">
                    Home page
                </p>
            </div>
        </MainLayout>
    );
}