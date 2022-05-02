

const data = [
    {
        trabajo: 'tarea 1',
        responsable: 'Hector',
        estado_requiere: 1,
        estado_activo: 0,
        estado_finalizado: 1,
        id: 1,
        informacion: 'esta tarea consiste en tal y tal cosas'
    },
    {
        trabajo: 'tarea 2',
        responsable: 'Juan',
        estado_requiere: 0,
        estado_activo: 1,
        estado_finalizado: 0,
        id: 2,
        informacion: 'esta tarea consiste en tal y tal cosas'

    },
    {
        trabajo: 'tarea 3',
        responsable: 'Marco',
        estado_requiere: 1,
        estado_activo: 1,
        estado_finalizado: 1,
        id: 3,
        informacion: 'esta tarea consiste en tal y tal cosas'

    }

];


function CompUpdate() {

    localStorage.setItem('storage1', JSON.stringify(data));
    console.log(JSON.stringify(data));

    return <div>Se guardo en local storage</div>;

}

export default CompUpdate;