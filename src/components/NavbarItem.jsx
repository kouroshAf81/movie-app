'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function NavbarItem({ title, param }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    return (
        <div>
            <Link
                className={`hover:text-amber-600 font-semibold ${
                    genre === param
                        ? 'underline underline-offset-8 decoration-4 decoration-amber-500'
                        : ''
                }`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    )
}

export default function NavbarItemWrapper(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavbarItem {...props} />
        </Suspense>
    )
}
