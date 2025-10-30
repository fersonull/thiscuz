import CommentCard from "./comment-card"

export default function Comments() {
    return (
        <div>
            <p><span className='font-semibold'>12</span> Replies</p>

            <div className="w-full mt-4">
                <CommentCard />
            </div>
        </div>
    )
}
