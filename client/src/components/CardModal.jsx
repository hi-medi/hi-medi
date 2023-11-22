import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./CardModal.css";

const CardModal = ({ show, handleClose, item }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={item.url}
          alt="만다라 이미지"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="comment-container">
          <p className="comment-text">{item.comment}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="date-container">
          <p className="date-text">{item.createDate}</p>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default CardModal;
