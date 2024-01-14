import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CryptoList = ({ setSelectedUrl }) => {
  const [page, setPage] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await axios.get(
        `https://crypto-tracker-chrome-extension.onrender.com?page=${page}`
      );
      setCurrencies(res.data.data);
    };

    fetchCurrencies();
  }, [page]);

  return (
    <div className="p-3">
      <div className="w-full mt-3">
        <div className="flex flex-row justify-center">
          <div
            className="mr-3"
            onClick={page === 1 ? null : () => setPage(page - 1)}
          >
            <NavigateBeforeIcon
              className={page === 1 ? `cursor-not-allowed` : `cursor-pointer`}
            />
          </div>
          <div>Page {page}</div>
          <div
            className="ml-3"
            onClick={page === 89 ? null : () => setPage(page + 1)}
          >
            <NavigateNextIcon
              className={page === 89 ? `cursor-not-allowed` : `cursor-pointer`}
            />
          </div>
        </div>
      </div>
      {currencies.map((currency, index) => (
        <div
          key={index}
          className="h-10 flex flex-row items-center justify-center cursor-pointer hover:bg-slate-100"
          onClick={() => setSelectedUrl(currency.url)}
        >
          <div className="font-bold">{currency.name}</div>
          <div className="ml-3 text-slate-500">{currency.symbol}</div>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
