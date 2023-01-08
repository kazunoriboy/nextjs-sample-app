import { ComponentMeta, ComponentStory } from "@storybook/react";
import ScaleImage from ".";

export default {
  title: 'Atoms/ScaleImage',
  argTypes: {
    src: {
      control: {type: 'text'},
      description: '画像URL',
      table: {
        type: {summary: 'string'}
      }
    },
    width: {
      control: {type:'number'},
      defaultValue: 320,
      description: '画像の横幅',
      table: {
        type: {summary:'number'}
      }
    },
    height: {
      control: {type:'number'},
      defaultValue: 320,
      desctiption: '画像の縦幅',
      table: {
        type: {summary: 'number'}
      }
    },
    containerWidth: {
      control: {type: 'number'},
      description: '横幅',
      defaultValue: 320,
      table: {
        type: {summary: 'number'},

      }

    },
    containerHeight: {
      control:{type: 'number'},
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: {summary: 'number'}
      }
    }
  }
} as ComponentMeta<typeof ScaleImage>

const Template: ComponentStory<typeof ScaleImage> = (args) => (
  <ScaleImage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {src: '/images/sample/1.jpeg'}
