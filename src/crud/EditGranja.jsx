import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:8000/granjas'

const CompEditGranja = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate(); 
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URL + '/' + id, {
            nombre: nombre,
            precio: precio,
            categoria_id: categoria
        })
        navigate('/admin')
    }

    useEffect(()=>{
        getGranjaById()
    }, [])

    const getGranjaById = async () => {
        const res = await axios.get(URL + '/' + id)
        setNombre(res.data.nombre)
        setPrecio(res.data.precio)
        setCategoria(res.data.categoria_id)
    }

    return (
        <div>
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
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
                    <label htmlFor="categoria">Categoría:</label>
                    <select
                        className="form-select"
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">-- Elige una opción --</option>
                        <option value="1">verdura</option>
                        <option value="2">fruta</option>
                    </select>
                </div>
            <button type="submit" className="btn btn-primary">Editar</button>
        </form>
    </div>
    )
}




export default CompEditGranja;



