import { useState, useEffect } from "react";
export default function UsuarioFetch(){
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsuarios(data);
            setCargando(false);
        })
        .catch(() => setCargando(false));
    }, []);

    if(cargando) return <p>Cargando...</p>

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
            <h2>Usuarios (fetch)</h2>
            <ul>
                {usuarios.map((u) => (
                    <li key={u.id}>{u.name} - {u.email}</li>
                ))}
            </ul>
        </div>
        </>
    )
}