import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

library.add(faChevronDown, faChevronUp);

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#ccc" : "#fff")};
  &:hover {
    background-color: #eee;
  }
`;

const DropdownInputOption = styled.input`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  margin: 0;
  width: calc(100% - 4px - 20px); //4px border, 20px padding
`;

const Dropdown = ({ searchable, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const filteredOption = searchString
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchString.toLowerCase())
      )
    : options;

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : "Select an option"}
        <FontAwesomeIcon
          icon={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownMenu>
          {searchable && (
            <DropdownInputOption
              value={searchString}
              onChange={handleSearchInputChange}
            />
          )}

          <DropdownOption onClick={() => handleOptionClick(null)}>
            {`Blank`}
          </DropdownOption>
          {filteredOption.map((option) => (
            <DropdownOption
              key={option.value}
              selected={option === selectedOption}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired, // {label: string, value: string}
  onSelect: PropTypes.func,
};

export default Dropdown;
