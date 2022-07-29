import React, { useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function CompPagination() {

    // endpoints del backend donde se se puede aplicar pagination
    const trabajoPagination = "http://127.0.0.1:8000/tdp/trabajoPagination?page="
    const proyectoPagination = "http://127.0.0.1:8000/tdp/proyectoPagination?page="

    // definimos dos useState: uno para los datos que traeremos del endpoint:
    const [data, setData] = useState()

    // y otro para almacenar el valor de boton de la barra que presionamos
    const [num, setNum] = useState(1)

    useEffect(
        () => {
            var response
            var json
            async function APIGet() {
                response = await fetch(trabajoPagination + num)
                json = await response.json()
                setData(json)
            }
            APIGet();
        }, [num]
    )

    // ahora nos enfocamos en el render. Para ello se creara un useState 
    // adicional para guardar el valor del evento al dar click sobre la barra
    // esta callback function sera llamada cuando se de click a uno de los botones de la barra
    function casa(event) {
        setNum(parseInt(event.target.text))
    }

    // Preparamos el HTML que dara la forma a la barra de numeros
    let active = num
    let items = []
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={casa}>
                {number}
            </Pagination.Item>,
        );
    }

    let doubled
    try {
        doubled = data.map(
            (d) => <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.fkFlujo}</td>
                <td>{d.fkPersona}</td>
                <td><TriggerExample hola={d.trabajo}/></td>
                <td><TriggerExample hola={d.responsable}/></td>
                <td>{d.estado_requiere}</td>
                <td>{d.estado_activo}</td>
                <td>{d.estado_finalizado}</td>
                <td><TriggerExample hola={d.informacion}/></td>
                <td><TriggerExample hola={d.sede}/></td>
            </tr>
        );
    } catch (error) {
        console.log(error)
    }
    // render lo siguiente:
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>fkFlujo</th>
                        <th>fkPersona</th>
                        <th>trabajo</th>
                        <th>responsable</th>
                        <th>estado_requiere</th>
                        <th>estado_activo</th>
                        <th>estado_finalizado</th>
                        <th>informacion</th>
                        <th>sede</th>
                    </tr>
                </thead>
                <tbody>
                    {doubled}
                </tbody>
            </Table>
            <div>
                <Pagination>{items}</Pagination>
            </div>
        </Container>
    )
}


function TriggerExample(props) {
    let a = props.hola
    let b = props.hola
    let tam = 7
    if(b.length > tam){
        b = props.hola.slice(0, tam)
        b = b + '...'
    }
    // console.log(typeof b === 'string')
    // console.log(b)
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {a}
      </Tooltip>
    );
  
    return (
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="light">{b}</Button>
      </OverlayTrigger>
    );
  }

export default CompPagination

