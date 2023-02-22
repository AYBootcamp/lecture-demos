import React from "react";

import Alert from "../components/Alert";

export default {
  title: "components/Alert",
  component: Alert,
  argTypes: {
    showIcon: {
      defaultValue: true,
      control: "boolean",
    },
    message: {
      defaultValue: "Hi, this is an alert message",
      control: "text",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};
export const Error = Template.bind({});
Error.args = {
  type: "error",
};
export const Success = Template.bind({});
Success.args = {
  type: "success",
};
