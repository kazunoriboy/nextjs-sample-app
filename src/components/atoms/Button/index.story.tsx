import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { type: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button' }

export const Seconday = Template.bind({})
Primary.args = { variant: 'secondary', children: 'Secondary Button' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: 'Disabled Button' }
