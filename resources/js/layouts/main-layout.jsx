import Navbar from "@/components/layout/navbar"

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
