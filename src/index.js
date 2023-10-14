import React from 'react';
import ReactDOM from 'react-dom';
import {MiComponente} from './componentes/miComponente'; // Importa tu componente
import {Saludo, Contador} from './componentes/miComponente'; // Importa tu componente

ReactDOM.render(
  <React.StrictMode>
    <MiComponente />
    <nuevoComponente>
      
    </nuevoComponente>

    <Saludo nombre='Juan'>
      
    </Saludo>
 <Contador></Contador>
  </React.StrictMode>,
  document.getElementById('root')
)
