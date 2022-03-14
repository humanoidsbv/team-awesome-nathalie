import { Button } from "../components/button/Button";

import * as Types from "../types/Button.types";

const Template = (args: Types.ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { defaultValue: "Button" },
    onClick: { action: "clicked" },
  },
};
