import { DatePicker } from "@myds/react/datepicker";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import { fn } from "@storybook/test";

/**
 * ### Overview
 * The Date Picker component allows users to select a date from an interactive calendar.
 *
 * ### Usage
 * ```ts
 * import * as React from "react"
 * import DatePicker from "@myds/react/datepicker";
 *
 * export function DatePickerDemo() {
 *    const [date, setDate] = React.useState<Date>();
 *
 *    return (
 *      <DatePicker selected={date} onSelect={setDate} />
 *    )
 * }
 *
 * ```
 */
const meta = {
  title: "@myds/react/Datepicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onSelect: fn() },
  argTypes: {
    defaultDate: {
      description:
        "The default date when initially rendered. Use when you do not need to control the state of the date picker.",
    },
    disabled: {
      description:
        "A value or a function that matches a specific day. See: https://daypicker.dev/api/type-aliases/Matcher",
    },
    formatStr: {
      table: {
        defaultValue: {
          summary: "dd MMM yyy",
        },
      },
      description:
        "Returns the formatted date string in the given format. The result may vary by locale. ⚠️ Please note that the format tokens used are from date-fns, which differ from Moment.js and other libraries. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
    },
    locale: {
      table: {
        defaultValue: {
          summary: "en",
        },
        type: {
          summary: "enum",
        },
      },
      description: "Controls which locale the date picker is in.",
      control: "inline-radio",
      options: ["en", "ms"],
    },
    maxYear: {
      table: {
        defaultValue: {
          summary: "2099",
        },
      },
      description: "Maximum selectable year.",
    },
    minYear: {
      table: {
        defaultValue: {
          summary: "1900",
        },
      },
      description: "Minimum selectable year.",
    },
    placeholder: {
      description: "Text that appears when no value is set.",
    },
    onSelect: {
      table: {
        type: {
          summary: "function",
        },
      },
      description: "Event handler when a day is selected.",
    },
    selected: {
      description:
        "The controlled date currently selected. Should be used in conjunction with `onSelect`.",
    },
    size: {
      table: {
        defaultValue: {
          summary: "small",
        },
        type: {
          summary: "enum",
        },
      },
      description: "Controls the size of the button.",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    yearOrder: {
      table: {
        defaultValue: {
          summary: "asc",
        },
        type: {
          summary: "enum",
        },
      },
      description:
        "Controls the order of the years displayed. It is in ascending (chronological) order by default.",
      control: "inline-radio",
      options: ["asc", "desc"],
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default DatePicker
 */
export const Default: Story = createStory({
  defaultDate: new Date(1957, 7, 31),
});
