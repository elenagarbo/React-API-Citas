import React from 'react';

function Cita({cita, index, eliminarCita}){

const handleClick = () =>{
    eliminarCita(index);
}

    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueno}</span></p>
            <p>Día y hora: <span>{cita.fecha}, {cita.hora}</span></p>
            <p>Sintoma: <span>{cita.sintoma}</span></p>
            <button 
                className="button eliminar"
                onClick= { handleClick}
            >Eliminar cita</button>
        </div>
    );
};

export default Cita;