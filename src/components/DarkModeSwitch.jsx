'use client'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const currentTheme = theme === 'system' ? systemTheme : theme

    const iconStyle = 'text-xl cursor-pointer hover:text-amber-500'

    useEffect(() => setMounted(true), [])
    return (
        <div>
            {mounted &&
                (currentTheme === 'dark' ? (
                    <MdLightMode
                        onClick={() => setTheme('light')}
                        className={iconStyle}
                    />
                ) : (
                    <MdDarkMode
                        onClick={() => setTheme('dark')}
                        className={iconStyle}
                    />
                ))}
        </div>
    )
}

export default DarkModeSwitch
