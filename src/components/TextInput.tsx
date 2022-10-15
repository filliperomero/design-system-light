import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

// Use the Compose Pattern

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='w-full flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return <input className='bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none' {...props} />
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'