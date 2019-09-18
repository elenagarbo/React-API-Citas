import React, { useState, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // useState retorna 2 funciones
  // const [state, actualizarState] = useState();
  // state = {
  //   citas :[]
  // }
  const [citas, guardarCita] = useState([]); // por eso es arreglo vacio

  //metodo para agregar las nuevas cita al state 
  const recibirCita = cita =>{
      // copia del state y agregar nueva cita
      const nuevasCitas = [...citas, cita];
      // guardamos en el state
      guardarCita(nuevasCitas);
  }

  // elimina la cita elegida del state

  const eliminarCita = index => {
    const nuevasCitas= [...citas];
    // meétodo para eliminar un elemento de array, que elemento y cuantos elementos a parti de el quieres eliminar
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  }


  return (
    <Fragment>
      <h1>Administración de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              recibirCita= { recibirCita }
            />
          </div>
          <div className="one-half column">
            {citas.map((cita, index) => (
              <Cita
                key= {index}
                index= {index}
                cita= {cita}
                eliminarCita= {eliminarCita}
              />
            ))}
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
