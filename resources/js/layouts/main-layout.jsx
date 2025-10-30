import Navbar from "@/components/layout/navbar"

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col h-screen font-geist">
            <Navbar />

            <main className="flex-1 lg:max-w-4xl xl:max-w-6xl max-w-md md:max-w-3xl w-full mx-auto">
                {children}
            </main>
        </div>
    )
}
