import { CheckCheck } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import CommentBubble from "./comment-bubble"

export default function CommentCard() {
    return (
        <div className='flex gap-3 relative group'>
            <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />
            </Avatar>

            <div className="flex flex-col group cursor-pointer">
                <CommentBubble content="just install it on vms. it will just install a windows os on that vm and then you can play any game with anti cheat" />

                <div className="w-full hidden group-hover:block mt-1 relative">
                    <Button variant="outline" className="absolute right-0 border-0">
                        <CheckCheck />
                        Mark as solution
                    </Button>
                </div>
            </div>
        </div>
    )
}
