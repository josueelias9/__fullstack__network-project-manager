import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

function TriggerExample(props) {
    let a = props.hola
    let b = props.hola
    let tam = props.tam
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
        <Button variant="white">{b}</Button>
      </OverlayTrigger>
    );
  }


  export default TriggerExample