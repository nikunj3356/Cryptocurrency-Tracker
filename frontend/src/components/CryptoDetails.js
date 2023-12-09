import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePickerValue from "./DatePickerValue";
import dayjs from "dayjs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CryptoDetails = ({ selectedUrl, setSelectedUrl }) => {
  const [details, setDetails] = useState(null);
  const [fromDate, setFromDate] = React.useState(dayjs().subtract(7, "day"));
  const [toDate, setToDate] = React.useState(dayjs());
  const [marketCapPercentageChange, setMarketCapPercentageChange] =
    useState(null);

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToJson = (e) => {
    e.preventDefault();
    downloadFile({
      data: JSON.stringify(details),
      fileName: "report.json",
      fileType: "text/json",
    });
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.post("http://localhost:5000/currency", {
        url: selectedUrl,
        timeStart: fromDate.unix(),
        timeEnd: toDate.unix(),
      });
      const details = res.data.data.data;
      setDetails(details);
      setMarketCapPercentageChange(
        (
          ((details.quotes[details.quotes.length - 1].quote.marketCap -
            details.quotes[0].quote.marketCap) *
            100) /
          details.quotes[0].quote.marketCap
        ).toFixed(2)
      );
    };

    setDetails(null);
    setMarketCapPercentageChange(null);
    fetchDetails();
  }, [selectedUrl, fromDate, toDate]);

  return (
    <div className="p-3">
        <div className="flex flex-row w-full justify-center">
            <ArrowBackIcon className="cursor-pointer" onClick={() => setSelectedUrl(null)} />
        </div>
      <div className="flex flex-row w-full justify-between text-xl">
        <div className="font-bold">Currency</div>
        <div className="font-bold">Market Cap %</div>
      </div>
      {details ? (
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row">
              <div>{details.name}</div>
              <div className="ml-3 text-slate-500">{details.symbol}</div>
          </div>
          <div
            className={
              marketCapPercentageChange > 0
                ? "text-green-500"
                : marketCapPercentageChange < 0
                ? "text-red-500"
                : ""
            }
          >
            {marketCapPercentageChange > 0 ? (
              <ArrowDropUpIcon />
            ) : marketCapPercentageChange < 0 ? (
              <ArrowDropDownIcon />
            ) : null}
            {Math.abs(marketCapPercentageChange)}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col w-full items-center mt-3">
        <DatePickerValue
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
        {details ? (
          <button
            type="button"
            onClick={exportToJson}
            className="mt-10 text-xl bg-blue-600 p-3 rounded-xl cursor-pointer text-white"
          >
            Download Report
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CryptoDetails;
