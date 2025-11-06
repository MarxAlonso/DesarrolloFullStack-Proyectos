import axios from "axios";
import { useState } from "react";

export default function BuscarPost(){
    const [id, setId] = useState("");
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axioss.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(res.data);
            setError(null);
        } catch{
            setError("Post no encontrado");
            setPost(null);
        }
    };

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
            <h2>Buscar Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID del post"/>
                <button type="submit">Buscar</button>
            </form>

            {error && <p style={{color: "red"}}>{error}</p>}
            {post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
        </>
    )
}