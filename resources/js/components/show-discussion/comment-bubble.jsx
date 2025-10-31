import React from 'react'

export default function CommentBubble({ content }) {
    return (
        <div className="bg-secondary rounded-md rounded-tl-none p-3 border border-boder relative">
            {content}

            {/* <div class="w-0 h-0 
                border-l-8 border-l-transparent 
                border-r-8 border-r-transparent 
                border-b-8 border-b-blue-500
                border border-border
                absolute top-1 -left-3 -rotate-90
                "
            /> */}

        </div>
    )
}
