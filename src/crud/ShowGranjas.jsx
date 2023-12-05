import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = 'http://localhost:8000/granjas'

const CompShowGranjas = () => {
    const [granjas, setGranja] = useState([])
    useEffect( () => {
        getGranjas()
    },[])

    const getGranjas = async () => {
        const res = await axios.get(URL)
        setGranja(res.data)
    }

    const deleteGranja = async (id) => {
        await axios.delete(`${URL}/${id}`)
        getGranjas()
    }
    
    return(
            <div className="container" style={{ backgroundColor: 'aliceblue' }}>
            <a href="/" className="btn btn-secondary">Volver</a>
            <div className="row" >
                <div className="col" >
                    <Link to="/create" className="btn btn-success mt-2 mb-2">Agregar Producto</Link>
                    <table className="table" >
                        <thead className="table-dark" >
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {granjas.map ((granja) => (
                                <tr key={granja.id}>
                                    <td>{ granja.nombre }</td>
                                    <td>{ granja.precio }</td>
                                    <td>{ granja.categoria.categoria }</td>
                                    <td>
                                        <Link to={`/edit/${granja.id}`} className="btn btn-warning">Editar</Link>
                                        <button onClick={ ()=> deleteGranja(granja.id)} className="btn btn-danger m-1">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default CompShowGranjas