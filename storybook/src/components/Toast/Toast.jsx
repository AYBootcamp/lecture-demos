import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

library.add(faCircleXmark);

const ToastContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Toast = ({ isOpen, timeout, setIsOpen, onClose, children }) => {
  // Close after an timed interval
  useEffect(() => {
    if (isOpen && timeout > 0) {
      setTimeout(() => {
        setIsOpen(false);
      }, timeout * 1000);
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <ToastContainer>
          {children}
          <IconButton
            onClick={() => {
              setIsOpen(false);
              onClose && onClose();
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </IconButton>
        </ToastContainer>
      )}
    </div>
  );
};

Toast.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  timeout: PropTypes.number,
  setIsOpen: PropTypes.func,
  onClose: PropTypes.func,
};

Toast.defaultProps = {
  children: "Children content goes here",
  timeout: 3,
};

export default Toast;
