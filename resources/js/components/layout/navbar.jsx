import { Link } from "@inertiajs/react"

export default function Navbar() {
    return (
        <div className="flex items-center justify-center lg:px-16 py-3">
            <div className="flex items-center justify-between w-full">
                <Link href="/">
                    <span className="tracking-tigher font-medium">thiscuz</span>
                </Link>
            </div>
        </div>
    )
}
