import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Use FontAwesome icons  https://fontawesome.com/v6/docs/web/use-with/react/
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

library.add(faCircleInfo, faTriangleExclamation, faCircleCheck, faCircleXmark);

const BaseAlert = styled.div`
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  > span {
    padding-left: 10px;
  }
`;

// Extend styles from base for different type variants
const InfoAlert = styled(BaseAlert)`
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
`;

const WarningAlert = styled(BaseAlert)`
  background-color: #fff3cd;
  color: #856404;
`;

const SuccessAlert = styled(BaseAlert)`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
`;

const ErrorAlert = styled(BaseAlert)`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

const Alert = ({ type, message, showIcon, ...props }) => {
  switch (type) {
    case "info":
      return (
        <InfoAlert {...props}>
          {showIcon && <FontAwesomeIcon icon="fa-solid fa-circle-info" />}
          <span>{message}</span>
        </InfoAlert>
      );
    case "warning":
      return (
        <WarningAlert {...props}>
          {showIcon && (
            <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
          )}
          <span>{message}</span>
        </WarningAlert>
      );
    case "success":
      return (
        <SuccessAlert {...props}>
          {showIcon && <FontAwesomeIcon icon="fa-solid fa-circle-check" />}
          <span>{message}</span>
        </SuccessAlert>
      );
    case "error":
      return (
        <ErrorAlert {...props}>
          {showIcon && <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />}
          <span>{message}</span>
        </ErrorAlert>
      );
    default:
      return (
        <BaseAlert {...props}>
          {showIcon && <FontAwesomeIcon icon="fa-solid fa-circle-info" />}
          <span>{message}</span>
        </BaseAlert>
      );
  }
};

Alert.propTypes = {
  showIcon: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(["info", "warning", "success", "error"]),
};

Alert.defaultProps = {
  showIcon: true,
  message: "",
  type: "info",
};

export default Alert;
