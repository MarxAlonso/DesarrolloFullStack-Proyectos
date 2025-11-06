import { useEffect, useState } from "react";
import axios from "axios";

export default function DetalleUsuarioAsync(){
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarUsuarios = async () => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsuarios(res.data);
            } catch{
                setError("Error al cargar usuarios");
            } finally{
                setCargando(false);
            }
        };
        cargarUsuarios();
    }, []);

    if(cargando) return <p>Cargando...</p>
    if(error) return <p style={{color: "red"}}>{error}</p>

    return(
        <>
         <nav style={{color: "white", paddingRight: "5px"}}>
            <a style={{color: "white", paddingRight: "5px"}} href="/">UsuarioFecth</a>
            <a style={{color: "white", paddingRight: "5px"}} href="/axios">UsuarioAxios</a>
            <a style={{color: "white", paddingRight: "5px"}} href="/async">UsuariosAsync</a>
            <a style={{color: "white", paddingRight: "5px"}} href="/listapost">ListaPostsFetch</a>
            <a style={{color: "white", paddingRight: "5px"}} href="/listalbums">ListaAlbumsAxios</a>
            <a style={{color: "white", paddingRight: "5px"}} href="/detallesasync">DetallesUsuariosAsync</a>
        </nav>     
        <div>
            <h2>Usuarios (axios)</h2>
            <ul>
                {usuarios.map((u) => (
                    <li key={u.id}>{u.name} - {u.email} - {u.phone}</li>
                ))}
            </ul>
        </div>
        </>
    )
}