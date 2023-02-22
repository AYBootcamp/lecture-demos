import React from "react";

import Button from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      defaultValue: "d7d7d7",
      control: "color",
    },
    color: {
      defaultValue: "#000000",
      control: "color",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  size: "medium",
  label: "Disabled Button",
};
