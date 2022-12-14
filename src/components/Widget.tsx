import { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import * as Popover from '@radix-ui/react-popover'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover.Root>
      <Popover.Trigger className='absolute bottom-5 right-5 flex items-center bg-violet-500 rounded-full px-3 h-12 text-white group'>
        <ChatTeardropDots className='w-6 h-6' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'/>
          Feedback
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <WidgetForm />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}