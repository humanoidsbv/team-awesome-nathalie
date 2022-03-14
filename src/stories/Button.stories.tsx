import { action } from "@storybook/addon-actions";

import { Button } from "../components/button/Button";

import * as Types from "../types/Button.types";

const Template = (args: Types.ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Primary = () => (
  <Button onClick={action("clicked")} label="Primary Button" disabled={false} />
);
export const Secondary = () => (
  <Button onClick={action("clicked")} label="Secondary Button" kind="secondary" />
);
