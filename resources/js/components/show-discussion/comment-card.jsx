import { CheckCheck, MessagesSquare } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import CommentBubble from "./comment-bubble"

export default function CommentCard({ name, content }) {
    return (
        <div className='flex gap-3 relative group mb-3'>
            <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />
            </Avatar>

            <div className="flex flex-col group">
                <div className="flex items-center gap-2">
                    <p className="mb-1 font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground"> 3 seconds ago</p>
                </div>

                <CommentBubble content={content} />

                <div className="w-full mt-1 relative lg:hidden lg:group-hover:block">
                    <Button variant="outline" className="right-0 border-0 shadow-none">
                        <MessagesSquare />
                        Reply
                    </Button>
                    <Button variant="outline" className=" right-0 border-0 shadow-none">
                        <CheckCheck />
                        Mark as solution
                    </Button>
                </div>
            </div>
        </div>
    )
}
