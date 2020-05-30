import React, {useState, useRef} from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import './css/popover.css';

function Year(props) {

  const target = useRef(null);
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <input class="form-control mr-sm-2" type="text" value={props.value} onChange={props.onChange}
      placeholder="Rok" aria-label="Rok" style={{width: '50px'}} maxlength="4" required=""
      ref={target}/>
      <Overlay
      show={!props.validation}
      target={target.current}
      placement="bottom"
      container={ref.current}
      containerPadding={20}
      >
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