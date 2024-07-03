// TimerModal.tsx
import React from "react";
import Modal from "react-modal";
import "./Modal.css";

interface TimerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  inputValue: string;
}

const TimerModal: React.FC<TimerModalProps> = ({
  isOpen,
  onRequestClose,
  inputValue,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Timer Ended"
      className="ModalOverlay"
      overlayClassName="ModalOverlay"
    >
      <div className="ModalContent">
        <h3 className="modal-heading">wpm</h3>
        <h2 className="modal-stat">
          {inputValue.trim().split(/\s+/).length * 4}
        </h2>
        <h3 className="modal-heading">acc</h3>
        <h2 className="modal-stat">97%</h2>
        <button className="CloseButton" onClick={onRequestClose}>
          X
        </button>
      </div>
    </Modal>
  );
};

export default TimerModal;
