import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 5px;
`;

const GroupedInputLabel = styled.div`
  display: flex;
  align-items: center;
  > input {
    margin-right: 10px;
  }
`;

const Input = ({ label, ...props }) => {
  if (label) {
    return (
      <GroupedInputLabel>
        <StyledInput {...props} />
        {label && <label>{label}</label>}
      </GroupedInputLabel>
    );
  }
  return <StyledInput {...props} />;
};

Input.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  // Native input props
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {};

export default Input;
