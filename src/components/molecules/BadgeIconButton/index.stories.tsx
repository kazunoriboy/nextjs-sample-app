import { ComponentMeta, ComponentStory } from '@storybook/react'
import BadgeIconButton from '.'
import {
  SearchIcon,
  PersonIcon,
  ShoppingCartIcon,
} from 'components/atoms/IconButton'

export default {
  title: 'Molecules/BadgeIconButton',
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: 'バッジカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof BadgeIconButton>

const Template: ComponentStory<typeof BadgeIconButton> = (args) => (
  <BadgeIconButton {...args} />
)

export const SearchBadgeIcon = Template.bind({})
SearchBadgeIcon.args = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#ed9f28',
}

export const PersonBadgeIcon = Template.bind({})
PersonBadgeIcon.args = {
  icon: <PersonIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#d4001a',
}

export const ShoppingBadgeIcon = Template.bind({})
ShoppingBadgeIcon.args = {
  icon: <ShoppingCartIcon size={24} />,
  badgeContent: 1,
  badgeBackgroundColor: '#32bf00',
}
