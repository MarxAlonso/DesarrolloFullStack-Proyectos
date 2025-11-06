import { useEffect, useState } from "react";
const THEME_KEY = "theme"
export function useTheme(){
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem(THEME_KEY)
        if(saved === "light" || saved === "dark"){
            return saved
        }
        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        return mql.matches ? "dark" : "light"
    })

    useEffect(() => {
        const root = document.documentElement
        if (theme === "dark") root.classList.add("dark")
        else root.classList.remove("dark")
        localStorage.setItem(THEME_KEY, theme)
    }, [theme])

    const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"))
    return { theme, toggleTheme }
}