import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Welcome" />
            <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800 font-sans">
                <p className="text-2xl font-bold text-black/60">
                    Home page
                </p>

                <Button variant="link" asChild>
                    <Link href="/discussions">Go to Discussions</Link>
                </Button>
            </div>
        </MainLayout>
    );
}