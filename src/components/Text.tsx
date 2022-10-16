import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: ReactNode
  className?: string
}

export function Text({ size = 'md', asChild, className, children }: TextProps) {
  const Comp = asChild ? Slot : 'span'
  
  return (
    <Comp 
      className={clsx(
        'text-gray-100 font-sans', 
        {
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size ==='lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}