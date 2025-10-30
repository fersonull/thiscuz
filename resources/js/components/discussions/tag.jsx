import React from 'react'

export default function Tag({ tag }) {
    console.log(tag)

    return (
        <div className="bg-secondary px-3 py-1 text-muted-foreground font-medium text-sm rounded">
            {tag}
        </div>
    )
}
