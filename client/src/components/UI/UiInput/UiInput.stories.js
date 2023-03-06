import UiInput from './UiInput';

export default {
  title: 'Ui-Kit/UiInput',
  component: UiInput,
};

const Template = (args) => <UiInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'search something..',
};
