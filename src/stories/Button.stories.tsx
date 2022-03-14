import React from "react";

import { action } from "@storybook/addon-actions";

import { Button } from "../components/button/Button";

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: "Button",
    onClick: { action: "clicked" },
  },
};

export const Primary = () => (
  <Button onClick={action("clicked")} label="Primary Button" disabled={false} />
);
export const Secondary = () => (
  <Button onClick={action("clicked")} label="Secondary Button" kind="secondary" />
);
