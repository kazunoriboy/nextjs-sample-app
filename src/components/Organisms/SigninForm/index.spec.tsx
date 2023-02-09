import {
  render,
  act,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import SigninForm from '.'
import { theme } from 'themes'

describe('SigninForm', () => {
  let renderResult: RenderResult
  let handleSignin: jest.Mock

  beforeEach(() => {
    handleSignin = jest.fn()
    renderResult = render(
      <ThemeProvider theme={theme}>
        <SigninForm onSignin={handleSignin} />
      </ThemeProvider>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ユーザー名とパスワード入力後、onSigninが呼ばれる', async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /ユーザ名/,
      ) as HTMLInputElement
      fireEvent.change(inputUsernameNode, { target: { value: 'user' } })
      const inputPasswordNode = screen.getByPlaceholderText(/パスワード/)
      fireEvent.change(inputPasswordNode, { target: { value: 'password' } })
      fireEvent.click(screen.getByText('サインイン'))
    })

    expect(handleSignin).toHaveBeenCalledTimes(1)
  })

  it('ユーザ名入力だけでは、バリデーションエラーでonSigninが呼ばれない', async () => {
    await act(async () => {
      const inputUsernameNode = screen.getByPlaceholderText(
        /ユーザ名/,
      ) as HTMLInputElement
      fireEvent.change(inputUsernameNode, { target: { value: 'user' } })
      fireEvent.click(screen.getByText('サインイン'))
    })

    expect(handleSignin).toHaveBeenCalledTimes(0)
  })
})
