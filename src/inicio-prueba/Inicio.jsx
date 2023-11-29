import axios from "axios";
import { useState, useEffect } from "react";

const URL = 'http://localhost:8000/granjas';

const CompInicio = () => {
    const [granjas, setGranjas] = useState([]);
    
    useEffect(() => {
        getGranjas();
    }, []);

    const getGranjas = async () => {
        try {
            const res = await axios.get(URL);
            setGranjas(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <h1>Inicio</h1>
            {granjas.map((granja) => (
                <div key={granja.id} className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{granja.nombre}</h5>
                        <p className="card-text">{granja.precio}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CompInicio;
