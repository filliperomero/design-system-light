import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  asChild?: boolean
  children: ReactNode
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className='py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-base w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'>
      {children}
    </Comp>
  )
}