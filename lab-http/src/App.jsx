import './App.css'
import UsuarioFetch from './component/UsuarioFetch'
import UsuariosAxios from './component/UsuariosAxios'
import UsuariosAsync from './component/UsuariosAsync'
import { Route, Routes } from 'react-router-dom'
import BuscarPost from './component/BuscarPost'
import ListaPostFecth from './common/ListaPostsFetch'
import ListaAlbumAxios from './common/ListaAlbumsAxios'
import DetalleUsuarioAsync from './common/DetalleUsuarioAsync'

function App() {
  return (
    <Routes>
        <Route path="/" element={<UsuarioFetch />} />
        <Route path="/axios" element={<UsuariosAxios />} />
        <Route path="/async" element={<UsuariosAsync />} />
        <Route path="/buscar" element={<BuscarPost />} />
        <Route path="/listapost" element={<ListaPostFecth />} />
        <Route path="/listalbums" element={<ListaAlbumAxios />} />
        <Route path="/detallesasync" element={<DetalleUsuarioAsync />} />
    </Routes>
  )
}

export default App
