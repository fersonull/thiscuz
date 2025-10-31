import CommentCard from "./comment-card"

const comments = [
    { name: 'Jasfer Monton', comment: "just install it on vms. it will just install a windows os on that vm and then you can play any game with anti cheat" },
    { name: 'Kimberly Macatangay', comment: "idk man. just use windows" },
    { name: 'Json Api', comment: "use something like vm bro, it always works for mes" },
    { name: 'Kimberly Macatangay', comment: "hi" },
]

export default function Comments() {
    return (
        <div>
            <p><span className='font-semibold'>12</span> Replies</p>

            <div className="w-full mt-4">
                {comments.map(({ name, comment }) => (
                    <CommentCard name={name} content={comment} />
                ))}
            </div>
        </div>
    )
}
