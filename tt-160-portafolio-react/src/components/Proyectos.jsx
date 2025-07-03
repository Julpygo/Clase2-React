import { useState, useEffect } from "react";
import ProyectosData from "../data/proyectos.json"
import TarjetaProyecto from "./TarjetaProyecto";

function Proyectos(){
    const [proyectos,setProyectos] = useState([])
    useEffect(()=>{
        setProyectos(ProyectosData)
    },[])
    return(
        <>
        <section className="container">
            <h2 className="text-center">Mis Proyectos</h2>
            <div className="row">
                {proyectos.map((proyecto,i)=>(
                    <TarjetaProyecto
                    key ={i}
                    proyecto = {proyecto}/>
                ))}
            </div>
        </section>
        {console.log(proyectos)}
        </>
    )
}

export default Proyectos