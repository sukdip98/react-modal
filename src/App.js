import "./styles.css";
import { useState } from "react";
export default function App() {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };
  const showModal = () => {
    setShow(true);
  };
  return (
    <div className="App">
      <button onClick={showModal}>Show Modal</button>
      <Modal show={show} closeModal={closeModal}>
        <div>Are you sure!</div>
      </Modal>
    </div>
  );
}

const Modal = ({ show, closeModal, children }) => {
  return (
    show && (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className={`modal ${show ? "active" : "close"}`}>
          <div className="modal-header">
            <h3> This is my modal</h3>
            <span className="modal-close" onClick={closeModal}>
              X
            </span>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </>
    )
  );
};
