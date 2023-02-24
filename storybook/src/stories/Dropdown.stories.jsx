import React from "react";

import Dropdown from "../components/Dropdown";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const Template = (args) => {
  return <Dropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Yellow", value: "Y" },
    { label: "Orange", value: "O" },
    { label: "Red", value: "R" },
    { label: "Green", value: "G" },
    { label: "Blue", value: "B" },
  ],
};

export const SearchDropdown = Template.bind({});
SearchDropdown.args = {
  ...Default.args,
  searchable: true,
};
