'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="text-center mt-10">
            <h1>Something went wrong. Please try again</h1>
            <button
                className="hover:text-amber-600"
                onClick={() => reset()}
            ></button>
        </div>
    )
}

export default Error
