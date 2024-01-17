import {Meta, StoryObj} from '@storybook/react';
import {FeedbackSuccessStep} from './FeedbackSuccessStep';
import { Popover } from '@headlessui/react';

export default {
  title: 'Components/WidgetForm/Steps/FeedbackSuccessStep',
  component: FeedbackSuccessStep,
  decorators: [
    (Story) => {
      return(
        <Popover>
          <Popover.Panel static>
            <div className='relative w-96 px-4 pt-4 rounded-xl flex flex-col items-center bg-zinc-900'>
            {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      )
    }
  ]
} as Meta;

export const Default: StoryObj = {}