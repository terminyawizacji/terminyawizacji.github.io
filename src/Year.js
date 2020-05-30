import React, {useRef} from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import './css/popover.css';

function Year(props) {

  const target = useRef(null);

  return (
    <div>
      <input class="form-control mr-sm-2" type="text" value={props.value} onChange={props.onChange}
        placeholder="Rok" aria-label="Rok" style={{textAlign: 'center'}} size="2" maxlength="4"
        ref={target}/>
      <Overlay
        show={!props.validation}
        target={target.current}
        placement="bottom">
        <Popover id="popover-contained" className="popover-danger">
          <Popover.Content>
            Rok musi być liczbą między 2000 a 3000.
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
    );
}
export default Year;