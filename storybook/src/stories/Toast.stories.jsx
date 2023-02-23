import React, { useState } from "react";

import Toast from "../components/Toast";

export default {
  title: "components/Toast",
  component: Toast,
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    timeout: {
      name: "timeout (in seconds)",
      control: "number",
    },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Toast isOpen={isOpen} setIsOpen={setIsOpen} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Content",
};

export const JSXChildren = Template.bind({});
JSXChildren.args = {
  timeout: 0,
  children: (
    <div>
      <h3>Hi, This is a React children content</h3>
      <p>We can put any arbitrary content here...</p>
      <button>Yes</button>
      <button>No</button>
    </div>
  ),
};
