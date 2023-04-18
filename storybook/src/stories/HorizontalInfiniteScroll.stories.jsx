/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import React from "react";

import HorizontalInfiniteScroll from "../components/HorizontalInfiniteScroll";

const ITEM_SIZE = 500;
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Item = styled.div`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;

  // temp debugging style
  border: 1px solid black;
  margin: 5px;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/HorizontalInfiniteScroll",
  component: HorizontalInfiniteScroll,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <HorizontalInfiniteScroll itemSize={ITEM_SIZE} {...args}>
      {args.children
        ? args.children
        : items.map((item) => (
            <Item
              key={item}
              style={{ width: args.itemSize, height: args.itemSize }}
            >
              {item}
            </Item>
          ))}
    </HorizontalInfiniteScroll>
  );
};

export const Size500 = Template.bind({});
Size500.args = {
  itemSize: 500,
};

export const Size300 = Template.bind({});
Size300.args = {
  itemSize: 300,
};

export const CustomizedChildren = Template.bind({});
CustomizedChildren.args = {
  itemSize: 500,
  children: items.map((item) => (
    <div
      key={item}
      style={{
        width: 500,
        height: 500,
        borderRadius: "20px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 2px",
      }}
    >
      item {item}
    </div>
  )),
};
