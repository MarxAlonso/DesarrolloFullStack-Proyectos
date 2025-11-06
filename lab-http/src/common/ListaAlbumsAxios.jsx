import {useState, useEffect} from "react";
import axios from "axios";

export default function ListaAlbumAxios(){
    const [usuarios, setUsuarios] = useState([]);
    const [error,setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((res) => setUsuarios(res.data))
        .catch(() => setError("No se pudo cargar usuarios"));
    }, []);

    if(error) return <p style={{color: "red"}}>{error}</p>;

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
                    <li key={u.id}>{u.id} - {u.title}</li>
                ))}
            </ul>
        </div>
        </>
    )
}