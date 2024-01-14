import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerValue = ({ fromDate, toDate, setFromDate, setToDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="From"
          value={fromDate}
          onChange={(newDate) => setFromDate(newDate)}
          maxDate={toDate.subtract(1, "day")}
        />
        <DatePicker
          label="To"
          value={toDate}
          onChange={(newDate) => setToDate(newDate)}
          minDate={fromDate.add(1, "day")}
          maxDate={dayjs()}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerValue;
