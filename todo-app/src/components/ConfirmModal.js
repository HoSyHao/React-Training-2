// src/components/ConfirmationModal.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

const ConfirmationModal = ({ message, taskName, onConfirm }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <p><strong>{taskName}</strong></p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
