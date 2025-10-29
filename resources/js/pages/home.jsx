import { Head } from '@inertiajs/react';
import { Github } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 font-sans">
                <main className="max-w-2xl w-full p-8 mx-4 bg-white rounded-lg shadow">

                    <h1 className="text-2xl font-bold text-center text-red-600 mb-3 italic">
                        Laravel + React + Inertia
                    </h1>

                    <p className=" text-center mb-6">
                        This template provides a clean starting point for your next project,
                        pre-configured with a modern, full-stack workflow.
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-medium mb-3">What's included:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><span className="font-semibold text-red-600 italic">Laravel:</span> PHP backend framework.</li>
                            <li><span className="font-semibold text-red-600 italic">React:</span> JavaScript library for UIs.</li>
                            <li><span className="font-semibold text-red-600 italic">Inertia.js:</span> The "glue" that connects the backend and frontend.</li>
                            <li><span className="font-semibold text-red-600 italic">Tailwind CSS:</span> A utility-first CSS framework.</li>
                            <li><span className="font-semibold text-red-600 italic">Vite:</span> Next-generation frontend tooling.</li>
                        </ul>
                    </div>

                    <div className="mt-8 text-center border-t border-gray-200 pt-6">
                        <p className="text-md">
                            To get started, edit this file:
                        </p>
                        <code className="inline-block mt-2 px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md font-mono">
                            resources/js/Pages/Home.jsx
                        </code>
                    </div>
                </main>

                <footer className="mt-6 text-sm text-gray-500 flex items-center justify-center">
                    <p className='me-1 font-medium'>Visit my github:</p>
                    <a href='https://github.com/fersonull' className="bg-gray-200 rounded-full px-3 py-1 flex items-center justify-center gap-1">
                        <Github size={18} />
                        <p className='font-medium hover:underline'>fersonull</p>
                    </a>
                </footer>
            </div>
        </>
    );
}