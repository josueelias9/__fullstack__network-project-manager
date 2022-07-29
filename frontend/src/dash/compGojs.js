import * as go from 'gojs'
import { ReactDiagram } from 'gojs-react'
import Container from 'react-bootstrap/Container'



// ...

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's dataTrabajoFiltrado should not be set here, as the ReactDiagram component handles that via the other props.
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
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and dataTrabajoFiltrado sync when using GraphLinksModel
                    })
            });

    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                // Shape.fill is bound to Node.dataTrabajoFiltrado.color
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

    let dataTrabajoFiltrado = props.dataTrabajoFiltrado
    let dataFlujo = props.dataFlujo
    let gojs_conexion = dataFlujo[0].conexion
    // se agrega el inicio y el fin ya que eso no va a cambiar nunca
    let gojs_flujo = [
        { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
        { key: 1, text: 'fin',    color: 'lightblue', loc: '450 150' },
    ];

    // si dataflujo tiene mas elementos que datatrabajo tenemos que completar 
    // artificialmente datatrabajo para evitar problemas
    if(dataFlujo[0].flujo.length > dataTrabajoFiltrado.length){
        let dif = dataFlujo[0].flujo.length - dataTrabajoFiltrado.length
        for(let i=0; i <dif;i++){
            dataTrabajoFiltrado.push(    
                {
                    'id': 0,
                    'fkFlujo': 0,
                    'fkPersona': 0,
                    'trabajo': 'completar',
                    'responsable': 'completar',
                    'estado_requiere': 0,
                    'estado_activo': 0,
                    'estado_finalizado': 0,
                    'informacion': 'completar',
                    'sede': 'completar'
                }
            )
        }
    }
    for(let i=0; i<dataFlujo[0].flujo.length;i++){
        // modificando los colores al elemento "flujo" que alimentara a gojs
        dataFlujo[0].flujo[i].nombre = dataTrabajoFiltrado[i].trabajo + " / " + dataTrabajoFiltrado[i].responsable;
        if (dataTrabajoFiltrado[i].estado_requiere == 0)
            dataFlujo[0].flujo[i].color = 'grey';
        else if (dataTrabajoFiltrado[i].estado_activo == 0)
            dataFlujo[0].flujo[i].color = 'blue';
        else if (dataTrabajoFiltrado[i].estado_finalizado == 0)
            dataFlujo[0].flujo[i].color = 'red';
        else
            dataFlujo[0].flujo[i].color = 'green';

        // agregando elementos a "conexion" que alimentara a gojs
        gojs_flujo.push({ 
            key: dataFlujo[0].flujo[i].key, 
            text: dataFlujo[0].flujo[i].nombre, 
            color: dataFlujo[0].flujo[i].color, 
            loc: dataFlujo[0].flujo[i].loc 
        })
        
    }

    return <Container><ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={gojs_flujo}
        linkDataArray={gojs_conexion}
        onModelChange={handleModelChange}
    /></Container>
        ;
}
export default CompGojs;