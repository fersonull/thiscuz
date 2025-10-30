import React from 'react'

export default function CommentBubble({ content }) {
    return (
        <div className="bg-secondary rounded-md rounded-tl-none p-3">
            {content}
        </div>
    )
}
