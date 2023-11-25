import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/granjas'

const CompCreateGranja = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate(); 

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URL, {nombre:nombre, precio:precio, categoria_id:categoria})
        navigate('/')
    }

    return(
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={ (e)=> setNombre(e.target.value)} 
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">    
                    <label className="form-label">Precio</label>
                    <input value={precio} onChange={ (e)=> setPrecio(e.target.value)} 
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">    
                    <label className="form-label">Categoria</label>
                    <input value={categoria} onChange={ (e)=> setCategoria(e.target.value)} 
                    type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Agregar</button>
            </form>
        </div>
    )
}

export default CompCreateGranja;