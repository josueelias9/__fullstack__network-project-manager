import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import Container from 'react-bootstrap/Container'



// ...

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
        $(go.Diagram,
            {
                'undoManager.isEnabled': true,  // must be set to allow for model change listening
                // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
                'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
                model: new go.GraphLinksModel(
                    {
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                    })
            });

    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                // Shape.fill is bound to Node.data.color
                new go.Binding('fill', 'color')),
            $(go.TextBlock,
                { margin: 8, editable: true },  // some room around the text
                new go.Binding('text').makeTwoWay()
            )
        );

    return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
function handleModelChange(changes) {
    console.log('cambio');
    //alert('GoJS model changed!');
}



function CompGojs(props) {

    let data;
    let inicio;
    let fin;
    let tarea1;
    let tarea2;
    let tarea3;
    let flujo;
    let conexion;

    function framework() {

        inicio = {
            nombre: 'inicio',
            id: 0,
            color: 'lightblue'
        }
        tarea1 = {
            nombre: 'tarea 1',
            id: 1,
            color: 'pink'
        }
        tarea2 = {
            nombre: 'tarea 2',
            id: 2,
            color: 'pink'
        }
        tarea3 = {
            nombre: 'tarea 3',
            id: 3,
            color: 'pink'
        }
        fin = {
            nombre: 'fin',
            id: 4,
            color: 'lightblue'
        }

        flujo = [
            {
                key: inicio.id,
                text: inicio.nombre,
                color: inicio.color,
                loc: '0 150'
            },
            { key: tarea2.id, text: tarea2.nombre, color: tarea2.color, loc: '150 0' },
            { key: tarea3.id, text: tarea3.nombre, color: tarea3.color, loc: '150 300' },
            { key: tarea1.id, text: tarea1.nombre, color: tarea1.color, loc: '300 0' },
            { key: fin.id, text: fin.nombre, color: fin.color, loc: '450 150' }
        ];

        conexion = [
            { key: -1, from: inicio.id, to: tarea2.id },
            { key: -2, from: inicio.id, to: tarea3.id },
            { key: -5, from: inicio.id, to: fin.id },
            { key: -7, from: tarea1.id, to: fin.id },
            { key: -6, from: tarea2.id, to: tarea1.id },
            { key: -4, from: tarea3.id, to: fin.id },
        ];
    }

    function retrieveDataBaseInformation() {
        data = props.data;
    }

    function modifyFramework() {
        // tarea 1
        tarea1.nombre = data[0].trabajo + " / " + data[0].responsable;
        if (data[0].estado_requiere == 0)
            tarea1.color = 'grey';
        else if (data[0].estado_activo == 0)
            tarea1.color = 'blue';
        else if (data[0].estado_finalizado == 0)
            tarea1.color = 'red';
        else
            tarea1.color = 'green';

        // tarea 2
        tarea2.nombre = data[1].trabajo + " / " + data[1].responsable;
        if (data[1].estado_requiere == 0)
            tarea2.color = 'grey';
        else if (data[1].estado_activo == 0)
            tarea2.color = 'blue';
        else if (data[1].estado_finalizado == 0)
            tarea2.color = 'red';
        else
            tarea2.color = 'green';

        // tarea 3
        tarea3.nombre = data[2].trabajo + " / " + data[2].responsable;
        if (data[2].estado_requiere == 0)
            tarea3.color = 'grey';
        else if (data[2].estado_activo == 0)
            tarea3.color = 'blue';
        else if (data[2].estado_finalizado == 0)
            tarea3.color = 'red';
        else
            tarea3.color = 'green';

        flujo = [
            { key: inicio.id, text: inicio.nombre, color: inicio.color, loc: '0 150' },
            { key: tarea2.id, text: tarea2.nombre, color: tarea2.color, loc: '150 0' },
            { key: tarea3.id, text: tarea3.nombre, color: tarea3.color, loc: '150 300' },
            { key: tarea1.id, text: tarea1.nombre, color: tarea1.color, loc: '300 0' },
            { key: fin.id, text: fin.nombre, color: fin.color, loc: '450 150' }
        ];
    }

    framework();
    retrieveDataBaseInformation();
    modifyFramework();

    return <Container><ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={flujo}
        linkDataArray={conexion}
        onModelChange={handleModelChange}
    /></Container>
        ;
}
export default CompGojs;