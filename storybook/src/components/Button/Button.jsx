import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// constant sizes
const SMALL = {
  fontSize: "12px",
  padding: "10px 16px",
};
const MEDIUM = {
  fontSize: "14px",
  padding: "11px 20px",
};
const LARGE = {
  fontSize: "16px",
  padding: "12px 24px",
};

const sizeMap = { small: SMALL, medium: MEDIUM, large: LARGE };

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 3px;
  border: none;
  font-family: "Monospace";
  :hover {
    border: 1px solid lightslategray;
    cursor: pointer;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ backgroundColor, size, label, ...props }) => {
  return (
    <StyledButton type="button" style={size && sizeMap[size]} {...props}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};

export default Button;
