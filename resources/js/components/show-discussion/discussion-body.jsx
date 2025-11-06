import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ChevronLeft } from 'lucide-react'
import Tags from '../discussions/tags'
import { back } from '@/hooks/use-back'

export default function DiscussionBody({ id, title, content, date, tags, solutions }) {
    return (
        <div className="py-3 px-4 flex flex-col gap-4 border-border border-b mb-4">
            <span className='flex items-center gap-1 hover:underline'>
                <ChevronLeft size={18} />
                <button onClick={() => back()}>Back</button>
            </span>
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

            <p>{content}</p>

            <div className="w-full flex justify-between mt-4">
                <div>
                    <Tags tags={tags} />
                </div>
                <span className="bg-secondary px-3 py-1 rounded">
                    <span className="font-bold">{solutions}</span> {solutions > 1 ? 'solutions' : 'solution'}
                </span>
            </div>
        </div>
    )
}
