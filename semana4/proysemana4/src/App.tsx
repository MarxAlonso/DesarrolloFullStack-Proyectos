import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className='min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100'>
      <Navbar />
    <main className='max-w-6xl mx-auto p-4'>
      <Routes>
          {/*<Route path="*" />*/}
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" />
      </Routes>
      </main>
      </div>
    </>
  )
}

export default App
