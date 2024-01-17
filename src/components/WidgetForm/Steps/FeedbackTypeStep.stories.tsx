import { Meta, StoryObj } from '@storybook/react';
import { FeedbackTypeStep } from './FeedbackTypeStep';
import { Popover } from '@headlessui/react';

export default {
  title: 'Components/WidgetForm/Steps/FeedbackTypeStep',
  component: FeedbackTypeStep,
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className='relative w-96 bg-zinc-900 px-4 pt-4 rounded-xl flex flex-col items-center'>
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
