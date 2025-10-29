import { Head } from '@inertiajs/react';
import { Github } from 'lucide-react';
import MainLayout from '@/layouts/main-layout';

export default function Home() {
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