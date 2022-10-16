import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('fake_api', (req, res, ctx) => {
          return res(ctx.json({ message: 'Login Okay' }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Type your email'), 'johndoe@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '12345678')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(canvas.getByText('Login Done')).toBeInTheDocument())
  }
}
