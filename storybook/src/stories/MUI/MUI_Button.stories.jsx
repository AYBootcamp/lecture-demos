// Import Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import React from "react";
import styled from "styled-components";

export default {
  title: "MUI_Components/Button",
  component: Button,
  argTypes: {
    onClick: {
      control: "func",
    },
  },
};

const Template = (args) => {
  return <Button {...args}>A MUI Button!</Button>;
};

export const Default = Template.bind({});
Default.args = {};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

const StyledMUIButton = styled(Button)`
  background-color: orange !important; // we need to override the styles.
`;

export const Styled = (args) => (
  <StyledMUIButton {...args}>A Custom Styled MUI Button!</StyledMUIButton>
);
Styled.args = {};
