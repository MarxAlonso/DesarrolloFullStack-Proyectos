import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../theme/useTheme";

export default function Navbar(){
    const {theme, toggleTheme} = useTheme();
    return(
        <nav className="border-b bg-white dark:bg-gray-900 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    MiTienda
                </Link>
                <div className="flex items-center gap-6">
                    <Link className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" to="/">Inicio</Link>
                    <Link className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" to="/catalogo">Catalogo</Link>
                    <Link className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" to="/carrito">Carrito</Link>
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                </div>
            </div>
        </nav>
    )
}