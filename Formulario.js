import React, { Fragment, useState } from 'react';

function Formulario({recibirCita}) {

    const stateInicial = {
        mascota:'',
        dueno:'',
        fecha:'',
        hora:'',
        sintoma:''
    }

    // state
    const [cita, actualizarCita] = useState(stateInicial);

    // actualizar el state
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // pasamos la cita al componente principal
    const enviarCita = e => {
        e.preventDefault();
        // console.log(cita);
        // pasar la cita hacia el componente principal
        recibirCita(cita);

        // reinicar el state (reiniciar el form con valores vacios)
        actualizarCita(stateInicial)
       
    }

    return (
        <Fragment>
        <h2>Crear cita</h2>
            <form onSubmit={ enviarCita }>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="mascota">Nombre mascota</label>
                        <input 
                            className="u-full-width" 
                            type="text" 
                            placeholder="Escribe nombre" 
                            id="mascota" 
                            name="mascota"
                            onChange={handleChange}
                            value={cita.mascota}
                        />
                    </div>
                    <div className="six columns">
                        <label htmlFor="dueno">Nombre dueño</label>
                        <input 
                            className="u-full-width" 
                            type="text" 
                            placeholder="Escribe nombre"  
                            id="dueno" 
                            name="dueno"
                            onChange={handleChange}
                            value={cita.dueno}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="fecha">Fecha</label>
                        <input 
                            className="u-full-width" 
                            type="date" 
                            name="fecha"
                            onChange={handleChange}
                            value={cita.fecha}
                        />
                    </div>
                    <div className="six columns">
                        <label htmlFor="hora">Hora</label>
                        <input 
                            className="u-full-width" 
                            type="time" 
                            name="hora"
                            onChange={handleChange}
                            value={cita.hora}
                        />
                    </div>
                </div>
                
                <label htmlFor="sintomas">Sintomas</label>
                <textarea 
                    className="u-full-width" 
                    placeholder="Sintomas de la mascota..." 
                    id="sintomas"
                    name="sintoma"
                    onChange={handleChange}
                    value={cita.sintoma}
                ></textarea>

                <button className="button-primary" type="submit">Agregar</button>
            </form>
        </Fragment>
    );
};

export default Formulario;