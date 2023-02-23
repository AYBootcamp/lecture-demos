import React, { useState } from "react";

import Input from "../components/Input";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {},
};

// Controlled Element
const HasLabels = ["radio", "checkbox"];
const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Input
      {...args}
      onChange={(...params) => {
        args.onChange(...params);
        setValue(...params);
      }}
      label={HasLabels.includes(args.type) && args.label}
    />
  );
};

export const UserInput = Template.bind({});
UserInput.args = {
  type: "text",
};
UserInput.argTypes = {
  type: {
    name: "Input Type",
    options: ["text", "number", "password"],
    control: { type: "radio" },
  },
};

export const SelectionInput = Template.bind({});
SelectionInput.args = {
  type: "checkbox",
  label: "Here is label for the input",
};
SelectionInput.argTypes = {
  type: {
    name: "Input Type",
    options: ["checkbox", "radio"],
    control: { type: "radio" },
  },
};

export const ColorInput = Template.bind({});
ColorInput.args = {
  type: "color",
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
};

export const FileInput = Template.bind({});
FileInput.args = {
  type: "file",
};
