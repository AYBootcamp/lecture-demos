import React from "react";

import DragAndDrop from "../components/DragAndDrop";

export default {
  title: "components/DragAndDrop",
  component: DragAndDrop,
  argTypes: {},
};

const Template = (args) => {
  return <DragAndDrop {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
