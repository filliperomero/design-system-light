import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: ReactNode
}

export function Button({ asChild, children, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={
      clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-base w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className
      )} 
      {...rest}
    >
      {children}
    </Comp>
  )
}