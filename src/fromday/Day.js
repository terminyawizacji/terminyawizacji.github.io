import React, {useRef} from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import './../css/popover.css';

function Day(props) {

  const target = useRef(null);

  return (
    <div>
      <input class="form-control mr-sm-2" type="text" value={props.value} onChange={props.onChange}
             placeholder="Dzień" aria-label="Dzień" style={{textAlign: 'center'}} size="1" maxlength="2"
             ref={target}/>
      <Overlay
        show={!props.validation}
        target={target.current}
        placement="bottom">
        <Popover id="popover-contained" className="popover-danger">
          <Popover.Content>
            Niepoprawna data.
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
export default Day;