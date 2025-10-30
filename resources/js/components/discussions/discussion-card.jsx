import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Link } from "@inertiajs/react"

export default function DiscussionCard({ title, date, solutions }) {
    return (
        <Link className="py-3 px-4 flex flex-col gap-4 border-border border-y">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />
                    <AvatarFallback>JM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <p className="font-bold text-xl">{title}</p>
                    <p className="text-muted-foreground font-medium text-sm">{date}</p>
                </div>
            </div>

            <div className="w-full text-end">
                <span className="bg-green-200/30 px-3 py-1 ">
                    <span className="font-bold">{solutions}</span> {solutions > 1 ? 'solutions' : 'solution'}
                </span>
            </div>
        </Link>
    )
}
