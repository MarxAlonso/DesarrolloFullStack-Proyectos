export default function ThemeToggle({theme, onToggle}: {theme: string, onToggle: () => void}){
    const isDark = theme === "dark"
    return (
        <button type="button" aria-pressed={isDark} onClick={onToggle} className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-white hover:bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-200 transition" title={isDark ? "Cambiar a claro" : "Cambiar a oscuro"}>
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path d="M21.752 15.002A9 9 0 1111.002 2.248 7 7 0 0021.752 15z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path d="M50 10 L60 30 L80 35 L65 50 L80 65 L60 70 L50 90 L40 70 L20 65 L35 50 L20 35 L40 30 Z" fill="#FFD700" />
                </svg>
            )}
            <span className="hidden sm:inline">{isDark ? "Oscuro" : "Claro"}</span>
        </button>
    )
}