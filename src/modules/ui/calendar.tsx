"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/modules/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-neutral-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-neutral-400",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-3xl last:[&:has([aria-selected])]:rounded-r-3xl focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50 dark:[&:has([aria-selected])]:bg-neutral-800",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-violet-200 focus:border focus:border-violet-300 rounded-3xl hover:bg-violet-200 focus:bg-violet-200 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900",
          day_today: " text-blue-400 dark:bg-neutral-800 dark:text-neutral-50",
          day_outside:
            "day-outside text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
          day_disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
          day_range_middle:
            "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        }}
        {...props}
      />
      <div className="flex justify-between gap-2 p-3 border-t">
        <button
          className="w-full bg-red-100  border border-red-200 rounded-xl text-red-500 font-medium px-4 py-2 hover:underline"
          onClick={() => console.log("Cancel clicked")}
        >
          Cancel
        </button>
        <button
          className="w-full bg-gray-100 border border-gray-200 rounded-xl text-black font-medium px-4 py-2 hover:underline"
          onClick={() => console.log("Done clicked")}
        >
          Done
        </button>
      </div>
    </>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
