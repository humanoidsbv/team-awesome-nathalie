import { action } from "@storybook/addon-actions";

import { Button } from "../components/button/Button";

import * as Types from "../types/Button.types";

const Template = (args: Types.ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    icon: {
      options: [true, false],
      control: { type: "boolean" },
    },
    label: { defaultValue: "Button" },
    onClick: { action: "clicked" },
  },
};
