import CommentCard from "./comment-card"
import { useState } from "react"
import { CheckCheck } from "lucide-react"

const comments = [
    { name: 'Jasfer Monton', comment: "just install it on vms. it will just install a windows os on that vm and then you can play any game with anti cheat" },
    { name: 'Kimberly Macatangay', comment: "idk man. just use windows" },
    { name: 'Json Api', comment: "use something like vm bro, it always works for mes" },
    { name: 'Kimberly Macatangay', comment: "hi" },
]

export default function Comments() {
    const [tab, setTab] = useState("all")

    return (
        <div>
            <div className="flex items-center gap-4 mt-4">
                <p><span className='font-semibold'>12</span> Replies</p>


                <div className="flex items-center gap-2 font-medium">
                    <button
                        onClick={() => setTab("all")}
                        className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-2 ${tab === "all"
                            ? "bg-primary text-background"
                            : "bg-secondary"
                            }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setTab("solutions")}
                        className={`px-3 py-1 rounded-full text-sm transition-all flex items-center gap-2 ${tab === "solutions"
                            ? "bg-primary text-background"
                            : "bg-secondary"
                            }`}
                    >
                        <CheckCheck size={16} /> Solutions
                    </button>
                </div>
            </div>

            <div className="w-full mt-6">
                {tab === 'all' && (
                    comments.map(({ name, comment }, idx) => (
                        <CommentCard key={idx} name={name} content={comment} />
                    ))
                )}

            </div>
        </div>
    )
}
