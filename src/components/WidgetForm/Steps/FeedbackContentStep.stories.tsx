import { Meta, StoryObj } from '@storybook/react';
import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from './FeedbackContentStep';
import { Popover } from '@headlessui/react';
import { feedbackTypes } from '..';
import {rest} from 'msw';

export default {
  title: 'Components/WidgetForm/Steps/FeedbackContentStep',
  args: {
    feedbackType: 'BUG',
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: 'inline-radio'
      }
    },
  },
  component: FeedbackContentStep,
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className='relative w-96 px-4 pt-4 rounded-xl flex flex-col items-center bg-zinc-900'>
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
  parameters: {
    msw: {
      handlers: [
        rest.post('/feedbacks', (req, res) => {
          return res();
        })
      ]
    },
  }
} as Meta<FeedbackContentStepProps>;

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'BUG',
  },
};

export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'IDEA',
  },
};

export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: 'OTHER',
  },
};
