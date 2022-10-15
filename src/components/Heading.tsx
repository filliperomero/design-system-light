import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: ReactNode
}

export function Heading({ size = 'md', asChild, children }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp 
      className={clsx(
        'text-gray-100 font-sans font-bold', 
        {
          'text-xl': size === 'sm',
          'text-2xl': size === 'md',
          'text-3xl': size ==='lg'
        }
      )}
    >
      {children}
    </Comp>
  )
}