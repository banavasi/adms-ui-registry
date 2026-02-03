import type { Preview } from '@storybook/vue3'
import '@/styles/styles.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: null,
    },
    actions: {
      handles: ['click', 'submit', 'focus', 'blur'],
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#191919' },
        { name: 'asu-maroon', value: '#8c1d40' },
        { name: 'asu-gold', value: '#ffc627' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', left: '☀️' },
          { value: 'dark', title: 'Dark', left: '🌙' },
        ],
        dynamicTitle: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
