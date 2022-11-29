import { addDecorator } from '@storybook/react'
import { createGlobalStyle, ThemeProvidor } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const createGlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decolation: none;
    transition: .25s;
    color: #000000;
  }
`

addDecorator((story) => (
  <ThemeProvidor theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvidor>
))

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimaized />
  )
})

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
})
