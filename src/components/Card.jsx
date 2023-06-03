function Card({lista, setLista}) {
    const handleEliminar = (id) => {
        const newArray = lista.filter((a) => a.id !== id)
        setLista(newArray)
    }
    
    return(
        <>
            <div className="CardStyle">
                <ul>
                    {lista.map((b) => (
                    <li key = {b.id} className="listaSinDecoraciones">
                        <h2>Tus colores favoritos: </h2>
                        <p>Nombre: {b.nombre}</p>
                        <p>Color: {b.color}</p>
                        <button onClick={()=>handleEliminar(b.id)}>Eliminar</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Card