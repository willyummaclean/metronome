import type { ReactElement } from 'react';
import type { FC } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
  return (
    <div
      className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}
    >
      <div className="modal-main">
        <div className="modal-head">
          <h1 className='modal-text'>Please Select a BPM between 40 and 200</h1>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}