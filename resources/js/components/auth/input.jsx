import React from 'react'

export const Input = ({ ...props }) => {
    return (
        <input className='rounded-sm px-3 py-4 outline-none border-2 border-border bg-secondary' {...props} />
    )
}
