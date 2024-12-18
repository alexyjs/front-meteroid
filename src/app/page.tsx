"use client";

import BookingCard from "@/modules/booking-card";
import { useState } from "react";
// import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/modules/ui/select";
import { Button } from "@/modules/ui/button";
import { Input } from "@/modules/ui/input";
import { DatePicker } from "@/modules/date-picker";

const bookings: Booking[] = [
  {
    title: "Standard Weekly Prep - 3.5 hours",
    date: "Wed, Dec 11, 2024 · 11:00 AM CST",
    status: "scheduled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  {
    title: "Events",
    date: "Sat, Dec 7, 2024 · 4:30 PM CST",
    status: "scheduled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  {
    title: "Dinner Prep",
    date: "Tue, Dec 10, 2024 · 6:00 PM CST",
    status: "scheduled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  {
    title: "Standard Weekly Prep - 3.5 hours",
    date: "Sat, Dec 7, 2024 · 12:30 PM CST",
    status: "canceled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  {
    title: "Meal Prep Light",
    date: "Thu, Dec 5 · 6:00 PM CST",
    status: "canceled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  {
    title: "Standard Weekly Prep - 3.5 hours",
    date: "Sun, Dec 8 · 1:00 PM CST",
    status: "scheduled",
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },

  // Add more bookings here as needed
];

export default function Home() {
  // const [value, setValue] = useState<DateValueType>({
  //   startDate: null,
  //   endDate: null,
  // });
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Sidebar */}
        <div className="w-16">
          <button className="text-2xl font-bold text-gray-500">☰</button>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4">
          <h1 className="text-2xl font-bold">Upcoming Bookings</h1>
          <button className="text-xs text-nowrap">Find Available Chef</button>
        </div>

        {/* Search and Filters */}
        <div className="mt-4">
          <Input
            className="rounded-xl bg-gray-100 border-gray-300 text-sm"
            placeholder="Search by client name..."
          />
        </div>

        <div className="w-full flex gap-4 mt-4">
          <div className="w-[30%] shrink-0 flex flex-col">
            <label className="font-semibold text-sm">Sort By:</label>
            <Select>
              <SelectTrigger className="mt-1 rounded-xl text-xs">
                <SelectValue className="!text-left" placeholder="Event Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event 1">Event</SelectItem>
                <SelectItem value="event 2">Event</SelectItem>
                <SelectItem value="event 3">Event</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <label className="font-semibold text-sm mb-1">Select Date</label>
            <DatePicker />
          </div>
        </div>

        {/* Booking List */}
        <div className="mt-4 space-y-4">
          {bookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))}
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span className="text-gray-500">Rows per page</span>
          <Select>
            <SelectTrigger className="w-[100px] mt-1 rounded-xl bg-gray-100 border border-gray-200">
              <SelectValue placeholder="100" />
            </SelectTrigger>
            <SelectContent className="w-[100px]">
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="300">300</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500">Page 1 of 1</span>

          <div className="flex gap-2">
            <Button className="text-gray-500" variant="secondary">
              Previous
            </Button>
            <Button className="text-gray-500" variant="secondary">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
