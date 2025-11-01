import { Link } from "@inertiajs/react"
import { LogIn } from "lucide-react"
import { Button } from "../ui/button"
import { MessagesSquare } from "lucide-react"

export default function Navbar() {
    return (
        <div className="flex items-center justify-center py-3">
            <div className="flex items-center justify-between w-full lg:max-w-4xl xl:max-w-6xl max-w-md md:max-w-3xl">
                <Link href="/">
                    <span className="tracking-tigher font-bold">thiscuz</span>
                </Link>

                <div className="flex gap-2">
                    <Button>
                        <MessagesSquare />
                        Create new
                    </Button>
                </div>
            </div>
        </div>
    )
}
