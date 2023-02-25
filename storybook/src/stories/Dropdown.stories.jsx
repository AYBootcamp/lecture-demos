import { userEvent, within } from "@storybook/testing-library";
import React from "react";

import Dropdown from "../components/Dropdown";
import delay from "../helpers/delay";

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

export const PlayDefaultDemo = Template.bind({});
PlayDefaultDemo.args = {
  ...Default.args,
};

PlayDefaultDemo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await delay(1);
  await userEvent.click(canvas.getByTestId("test_id_dropdown_header"));
  await delay(1);
  await userEvent.click(canvas.getByTestId("test_id_yellow"));
};
