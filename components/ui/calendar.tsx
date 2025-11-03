'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayPicker, useDayRender, type DayProps } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

const DEFAULT_CLASS_NAMES = {
  root: 'rdp',
  multiple_months: 'rdp-multiple_months',
  with_weeknumber: 'rdp-with_weeknumber',
  vhidden: 'rdp-vhidden',
  button_reset: 'rdp-button_reset',
  button: 'rdp-button',
  caption: 'rdp-caption',
  caption_start: 'rdp-caption_start',
  caption_end: 'rdp-caption_end',
  caption_between: 'rdp-caption_between',
  caption_label: 'rdp-caption_label',
  caption_dropdowns: 'rdp-caption_dropdowns',
  dropdown: 'rdp-dropdown',
  dropdown_month: 'rdp-dropdown_month',
  dropdown_year: 'rdp-dropdown_year',
  dropdown_icon: 'rdp-dropdown_icon',
  months: 'rdp-months',
  month: 'rdp-month',
  table: 'rdp-table',
  tbody: 'rdp-tbody',
  tfoot: 'rdp-tfoot',
  head: 'rdp-head',
  head_row: 'rdp-head_row',
  head_cell: 'rdp-head_cell',
  nav: 'rdp-nav',
  nav_button: 'rdp-nav_button',
  nav_button_previous: 'rdp-nav_button_previous',
  nav_button_next: 'rdp-nav_button_next',
  nav_icon: 'rdp-nav_icon',
  row: 'rdp-row',
  weeknumber: 'rdp-weeknumber',
  cell: 'rdp-cell',
  day: 'rdp-day',
  day_today: 'rdp-day_today',
  day_outside: 'rdp-day_outside',
  day_selected: 'rdp-day_selected',
  day_disabled: 'rdp-day_disabled',
  day_hidden: 'rdp-day_hidden',
  day_range_start: 'rdp-day_range_start',
  day_range_end: 'rdp-day_range_end',
  day_range_middle: 'rdp-day_range_middle',
} as const

type CalendarProps = Omit<React.ComponentProps<typeof DayPicker>, 'captionLayout'> & {
  captionLayout?: React.ComponentProps<typeof DayPicker>['captionLayout'] | 'label'
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = DEFAULT_CLASS_NAMES
  const resolvedCaptionLayout =
    captionLayout === 'label' ? 'buttons' : captionLayout

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={resolvedCaptionLayout}
      formatters={{
        formatMonthCaption: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'flex gap-4 flex-col md:flex-row relative',
          defaultClassNames.months,
        ),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn(
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          defaultClassNames.nav,
        ),
        nav_button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.nav_button_previous,
        ),
        nav_button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.nav_button_next,
        ),
        caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.caption,
        ),
        caption_dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.caption_dropdowns,
        ),
        dropdown_month: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_month,
        ),
        dropdown_year: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_year,
        ),
        dropdown: cn(
          'absolute bg-popover inset-0 opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: cn('w-full border-collapse', defaultClassNames.table),
        head: cn('contents', defaultClassNames.head),
        head_row: cn('flex', defaultClassNames.head_row),
        head_cell: cn(
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
          defaultClassNames.head_cell,
        ),
        row: cn('flex w-full mt-2', defaultClassNames.row),
        weeknumber: cn(
          'text-[0.8rem] select-none text-muted-foreground',
          defaultClassNames.weeknumber,
        ),
        cell: defaultClassNames.cell,
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        day_range_start: cn(
          'rounded-l-md bg-accent',
          defaultClassNames.day_range_start,
        ),
        day_range_middle: cn('rounded-none', defaultClassNames.day_range_middle),
        day_range_end: cn('rounded-r-md bg-accent', defaultClassNames.day_range_end),
        day_today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.day_today,
        ),
        day_outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.day_outside,
        ),
        day_disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.day_disabled,
        ),
        day_hidden: cn('invisible', defaultClassNames.day_hidden),
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeftIcon className={cn('size-4', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRightIcon className={cn('size-4', className)} {...props} />
        ),
        IconDropdown: ({ className, ...props }) => (
          <ChevronDownIcon className={cn('size-4', className)} {...props} />
        ),
        Day: CalendarDay,
        ...components,
      }}
      {...(props as React.ComponentProps<typeof DayPicker>)}
    />
  )
}

function CalendarDay({ displayMonth, date }: DayProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const dayRender = useDayRender(date, displayMonth, buttonRef)
  const defaultClassNames = DEFAULT_CLASS_NAMES

  if (dayRender.isHidden) {
    return <div role="gridcell" />
  }

  const activeModifiers = dayRender.activeModifiers
  const baseClassName = dayRender.buttonProps.className ?? dayRender.divProps.className
  const baseStyle = dayRender.buttonProps.style ?? dayRender.divProps.style

  const className = cn(
    'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70',
    defaultClassNames.day,
    baseClassName,
  )

  const dataAttributes = {
    'data-day': date.toLocaleDateString(),
    'data-selected-single':
      activeModifiers.selected &&
      !activeModifiers.range_start &&
      !activeModifiers.range_end &&
      !activeModifiers.range_middle
        ? true
        : undefined,
    'data-range-start': activeModifiers.range_start,
    'data-range-end': activeModifiers.range_end,
    'data-range-middle': activeModifiers.range_middle,
  } as const

  if (!dayRender.isButton) {
    const { className: _className, style: _style, ...divProps } = dayRender.divProps

    return (
      <div
        {...divProps}
        {...dataAttributes}
        className={className}
        style={baseStyle}
      />
    )
  }

  const { className: _buttonClassName, style: _buttonStyle, ...buttonProps } =
    dayRender.buttonProps

  return (
    <Button
      {...buttonProps}
      {...dataAttributes}
      ref={buttonRef}
      variant="ghost"
      size="icon"
      className={className}
      style={baseStyle}
    />
  )
}

export { Calendar, CalendarDay }
