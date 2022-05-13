import React, { useEffect, useState } from 'react';

const backendAPIPersona = "http://127.0.0.1:8000/tdp/dataPersona";
const backendAPITrabajo = "http://127.0.0.1:8000/tdp/dataTrabajo";
const backendAPIFlujo = "http://127.0.0.1:8000/tdp/dataFlujo";
const backendAPIProyecto = "http://127.0.0.1:8000/tdp/dataProyecto";

function CompAPI() {
    const [dataPersona, setDataPersona] = useState('');
    const [dataTrabajo, setDataTrabajo] = useState('');
    const [dataFlujo, setDataFlujo] = useState('');
    const [dataProyecto, setDataProyecto] = useState('');

    useEffect(
        () => {
            let response;
            let json;
            async function APIGet() {

                try {
                    response = await fetch(backendAPIPersona);
                    json = await response.json();
                    setDataPersona(await json);

                    response = await fetch(backendAPITrabajo);
                    json = await response.json();
                    setDataTrabajo(await json);

                    response = await fetch(backendAPIFlujo);
                    json = await response.json();
                    setDataFlujo(await json);

                    response = await fetch(backendAPIProyecto);
                    json = await response.json();
                    setDataProyecto(await json);

                    document.getElementById("test").innerText = "Se descargo correctamente la informacion de manera local";

                } catch (error) {
                    document.getElementById("test").innerText = "No hay conexion con la base de datos.";
                    console.log(error);
                }

            }
            APIGet();
        }
        , []
    );

    localStorage.setItem('dataPersona', JSON.stringify(dataPersona));
    localStorage.setItem('dataTrabajo', JSON.stringify(dataTrabajo));
    localStorage.setItem('dataFlujo', JSON.stringify(dataFlujo));
    localStorage.setItem('dataProyecto', JSON.stringify(dataProyecto));

    return <div>
        <h1>Carga la informacion:</h1>
        <h4 id="test"></h4>
    </div>;
}

export default CompAPI;